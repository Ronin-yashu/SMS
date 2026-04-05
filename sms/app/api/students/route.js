import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withSchool } from '@/lib/withAuth';

// ── Helpers ─────────────────────────────────────────────────────────────────

function generateStudentId(schoolCode, year, count) {
  const yy  = String(year).slice(2, 4) + String(year + 1).slice(2, 4);
  const seq = String(count + 1).padStart(4, '0');
  return `${schoolCode}-${yy}-${seq}`;
}

function generateAdmissionNumber(schoolCode, year, count) {
  const yy  = String(year).slice(2, 4);
  const seq = String(count + 1).padStart(5, '0');
  return `ADM${yy}${schoolCode}${seq}`;
}

function generateQrValue(studentId) {
  return `QR-${studentId}-${Date.now()}`;
}

function getCurrentAcademicYear() {
  const now   = new Date();
  const month = now.getMonth() + 1;
  const year  = now.getFullYear();
  return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
}

// ── GET — paginated student list ────────────────────────────────────────────

export const GET = withSchool(async (request, username, school) => {
  try {
    const { searchParams } = new URL(request.url);

    const page    = Math.max(1, parseInt(searchParams.get('page')  || '1'));
    const limit   = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20')));
    const search  = searchParams.get('search')?.trim()  || '';
    const cls     = searchParams.get('class')           || '';
    const section = searchParams.get('section')         || '';
    const status  = searchParams.get('status')          || '';
    const year    = searchParams.get('academicYear')    || getCurrentAcademicYear();

    const where = {
      schoolId: school.id,
      ...(status && { status }),
      ...(search && {
        OR: [
          { firstName:       { contains: search, mode: 'insensitive' } },
          { lastName:        { contains: search, mode: 'insensitive' } },
          { admissionNumber: { contains: search, mode: 'insensitive' } },
          { studentId:       { contains: search, mode: 'insensitive' } },
          { parent: { OR: [
            { fatherMobile: { contains: search } },
            { motherMobile: { contains: search } },
            { guardianMobile: { contains: search } },
          ]}},
        ],
      }),
      ...((cls || section) && {
        academicHistory: {
          some: {
            academicYear: year,
            ...(cls     && { class:   cls }),
            ...(section && { section }),
          },
        },
      }),
    };

    const [students, total] = await Promise.all([
      prisma.student.findMany({
        where,
        skip:    (page - 1) * limit,
        take:    limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id:                   true,
          studentId:            true,
          admissionNumber:      true,
          firstName:            true,
          middleName:           true,
          lastName:             true,
          gender:               true,
          bloodGroup:           true,
          photoUrl:             true,
          status:               true,
          admissionDate:        true,
          usesTransport:        true,
          parentPrimaryMobile:  true,
          createdAt:            true,
          parent: {
            select: {
              fatherName:     true,
              fatherMobile:   true,
              motherName:     true,
              motherMobile:   true,
              primaryContact: true,
            },
          },
          academicHistory: {
            where:   { academicYear: year },
            select:  { class: true, section: true, rollNumber: true, academicYear: true },
            orderBy: { createdAt: 'desc' },
            take:    1,
          },
        },
      }),
      prisma.student.count({ where }),
    ]);

    // Flatten currentClass/currentSection onto each student for easy component use
    const shaped = students.map(s => {
      const h = s.academicHistory[0] ?? null;
      return {
        ...s,
        currentClass:   h?.class      ?? null,
        currentSection: h?.section    ?? null,
        currentRoll:    h?.rollNumber ?? null,
      };
    });

    return NextResponse.json({
      students: shaped,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNext:    page < Math.ceil(total / limit),
        hasPrev:    page > 1,
      },
    }, { status: 200 });

  } catch (error) {
    console.error('[GET /api/students]', error);
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
});

// ── POST — create student ──────────────────────────────────────────────────

export const POST = withSchool(async (request, username, school) => {
  try {
    const body = await request.json();

    const {
      // Personal
      firstName, middleName, lastName, dateOfBirth, gender,
      bloodGroup, aadharNumber, photoUrl,
      // Address
      addressLine1, addressLine2, city, state, pinCode, country,
      // Contact
      parentPrimaryMobile, parentAlternateMobile, parentEmail,
      emergencyContactName, emergencyContactPhone,
      // Academic
      academicYear, class: cls, section, rollNumber,
      // Parent
      parent: parentData,
      // Transport
      usesTransport, transportRouteId, pickupPoint, dropPoint,
      // Fee
      assignFee,
    } = body;

    // ── Basic required-field validation ────────────────────────────────────
    const missing = [];
    if (!firstName?.trim())           missing.push('firstName');
    if (!lastName?.trim())            missing.push('lastName');
    if (!dateOfBirth)                 missing.push('dateOfBirth');
    if (!gender)                      missing.push('gender');
    if (!addressLine1?.trim())        missing.push('addressLine1');
    if (!city?.trim())                missing.push('city');
    if (!state?.trim())               missing.push('state');
    if (!pinCode?.trim())             missing.push('pinCode');
    if (!cls)                         missing.push('class');
    if (!parentPrimaryMobile?.trim()) missing.push('parentPrimaryMobile');
    if (!parentData)                  missing.push('parent');

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    // ── Parent data validation — schema requires fatherName + motherName as String (not optional) ──
    // We default to 'N/A' if guardian is used instead, to satisfy Prisma's non-null constraint
    const resolvedParent = {
      primaryContact:    parentData.primaryContact    || 'Father',
      fatherName:        parentData.fatherName?.trim()  || (parentData.guardianName ? 'N/A' : ''),
      fatherMobile:      parentData.fatherMobile?.trim() || (parentData.guardianMobile ? 'N/A' : ''),
      fatherEmail:       parentData.fatherEmail        || null,
      fatherOccupation:  parentData.fatherOccupation   || null,
      fatherAadhar:      parentData.fatherAadhar       || null,
      motherName:        parentData.motherName?.trim()  || 'N/A',
      motherMobile:      parentData.motherMobile?.trim() || 'N/A',
      motherEmail:       parentData.motherEmail        || null,
      motherOccupation:  parentData.motherOccupation   || null,
      motherAadhar:      parentData.motherAadhar       || null,
      guardianName:      parentData.guardianName       || null,
      guardianRelation:  parentData.guardianRelation   || null,
      guardianMobile:    parentData.guardianMobile     || null,
      guardianEmail:     parentData.guardianEmail      || null,
      addressLine1:      parentData.parentAddressLine1?.trim() || parentData.addressLine1?.trim() || '',
      addressLine2:      parentData.parentAddressLine2 || parentData.addressLine2 || null,
      city:              parentData.parentCity?.trim()  || parentData.city?.trim() || '',
      state:             parentData.parentState?.trim() || parentData.state?.trim() || '',
      pinCode:           parentData.parentPinCode?.trim() || parentData.pinCode?.trim() || '',
      country:           'India',
      schoolId:          school.id,
    };

    // Validate resolved parent has at minimum a valid contact name
    if (!resolvedParent.fatherName && !resolvedParent.guardianName) {
      return NextResponse.json(
        { error: 'Father name or guardian name is required' },
        { status: 400 }
      );
    }

    // ── Counters and generated IDs ─────────────────────────────────────────
    const existingCount   = await prisma.student.count({ where: { schoolId: school.id } });
    const nowYear         = new Date().getFullYear();
    const activeYear      = academicYear || getCurrentAcademicYear();

    const studentId       = generateStudentId(school.schoolCode, nowYear, existingCount);
    const admissionNumber = generateAdmissionNumber(school.schoolCode, nowYear, existingCount);
    const qrCodeValue     = generateQrValue(studentId);

    // ── Check fee structure availability ───────────────────────────────────
    const feeStructure = await prisma.feeStructure.findFirst({
      where: { schoolId: school.id, class: cls, academicYear: activeYear },
    });

    // ── Transaction: Parent → Student → AcademicHistory → StudentFee ─────────
    const result = await prisma.$transaction(async (tx) => {

      // 1. Create Parent
      const newParent = await tx.parent.create({ data: resolvedParent });

      // 2. Create Student
      const newStudent = await tx.student.create({
        data: {
          studentId,
          admissionNumber,
          qrCodeValue,
          firstName:            firstName.trim(),
          middleName:           middleName?.trim() || null,
          lastName:             lastName.trim(),
          dateOfBirth:          new Date(dateOfBirth),
          gender,
          bloodGroup:           bloodGroup    || null,
          aadharNumber:         aadharNumber  || null,
          photoUrl:             photoUrl      || null,
          parentPrimaryMobile:  parentPrimaryMobile.trim(),
          parentAlternateMobile: parentAlternateMobile?.trim() || null,
          parentEmail:          parentEmail   || null,
          emergencyContactName:  emergencyContactName  || null,
          emergencyContactPhone: emergencyContactPhone || null,
          addressLine1:         addressLine1.trim(),
          addressLine2:         addressLine2?.trim() || null,
          city:                 city.trim(),
          state:                state.trim(),
          pinCode:              pinCode.trim(),
          country:              country || 'India',
          admissionDate:        new Date(),
          usesTransport:        usesTransport || false,
          transportRouteId:     usesTransport ? transportRouteId || null : null,
          pickupPoint:          usesTransport ? pickupPoint  || null : null,
          dropPoint:            usesTransport ? dropPoint    || null : null,
          status:               'Active',
          schoolId:             school.id,
          parentId:             newParent.id,
        },
      });

      // 3. Academic History
      await tx.studentAcademicHistory.create({
        data: {
          studentId:       newStudent.id,
          academicYear:    activeYear,
          class:           cls,
          section:         section || 'A',
          rollNumber:      parseInt(rollNumber) || 0,
          promotionStatus: 'NA',
        },
      });

      // 4. Auto-assign StudentFee
      let studentFee = null;
      if (feeStructure && assignFee) {
        const totalFee = (
          feeStructure.tuitionFeeMonthly * 12 +
          (usesTransport ? feeStructure.transportFeeMonthly * 12 : 0) +
          feeStructure.examFeeYearly +
          feeStructure.admissionFee +
          feeStructure.booksFee +
          feeStructure.idCardFee +
          feeStructure.activityFee
        );
        studentFee = await tx.studentFee.create({
          data: {
            studentId:    newStudent.id,
            academicYear: activeYear,
            tuitionFee:   feeStructure.tuitionFeeMonthly * 12,
            transportFee: usesTransport ? feeStructure.transportFeeMonthly * 12 : 0,
            examFee:      feeStructure.examFeeYearly,
            admissionFee: feeStructure.admissionFee,
            booksFee:     feeStructure.booksFee,
            otherFees:    feeStructure.idCardFee + feeStructure.activityFee,
            totalFee,
            totalPayable: totalFee,
            totalPaid:    0,
            totalPending: totalFee,
          },
        });
      }

      return { newStudent, newParent, studentFee };
    });

    // ── Fire welcome notification outside transaction (non-blocking) ─────────
    // Do NOT let notification failure roll back the student creation
    prisma.notification.create({
      data: {
        studentId:   result.newStudent.id,
        schoolId:    school.id,
        type:        'WELCOME',
        channel:     'SMS',
        status:      'PENDING',
        messageBody: `Welcome to ${school.schoolName}! ${firstName} ${lastName} (${admissionNumber}) has been successfully admitted.`,
        triggeredBy: 'AUTO',
      },
    }).catch(err => console.warn('[Notification] Failed to create welcome notification:', err.message));

    return NextResponse.json({
      message:           'Student added successfully',
      studentId:         result.newStudent.studentId,
      admissionNumber:   result.newStudent.admissionNumber,
      feeAssigned:       !!result.studentFee,
      feeStructureFound: !!feeStructure,
      feeStructure: feeStructure ? {
        class:               feeStructure.class,
        academicYear:        feeStructure.academicYear,
        tuitionFeeMonthly:   feeStructure.tuitionFeeMonthly,
        transportFeeMonthly: feeStructure.transportFeeMonthly,
      } : null,
    }, { status: 201 });

  } catch (error) {
    console.error('[POST /api/students]', error);
    if (error.code === 'P2002') {
      const field = error.meta?.target?.join(', ') || 'field';
      return NextResponse.json(
        { error: `A student with this ${field} already exists` },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: 'Failed to add student' }, { status: 500 });
  }
});
