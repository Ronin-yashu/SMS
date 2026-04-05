import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withSchool } from '@/lib/withAuth';

// ─── Helpers ────────────────────────────────────────────────────────────────

function generateStudentId(schoolCode, year, count) {
  const yy = String(year).slice(2, 4) + String(year + 1).slice(2, 4); // "2526"
  const seq = String(count + 1).padStart(4, '0');
  return `${schoolCode}-${yy}-${seq}`;
}

function generateAdmissionNumber(schoolCode, year, count) {
  const yy = String(year).slice(2, 4);
  const seq = String(count + 1).padStart(5, '0');
  return `ADM${yy}${schoolCode}${seq}`;
}

function generateQrValue(studentId) {
  return `QR-${studentId}-${Date.now()}`;
}

function getCurrentAcademicYear() {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const year = now.getFullYear();
  // Academic year starts in April in India
  if (month >= 4) return `${year}-${year + 1}`;
  return `${year - 1}-${year}`;
}

// ─── GET — paginated student list ───────────────────────────────────────────

export const GET = withSchool(async (request, username, school) => {
  try {
    const { searchParams } = new URL(request.url);

    const page     = Math.max(1, parseInt(searchParams.get('page')  || '1'));
    const limit    = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '20')));
    const search   = searchParams.get('search')?.trim() || '';
    const cls      = searchParams.get('class')  || '';
    const section  = searchParams.get('section') || '';
    const status   = searchParams.get('status') || '';
    const year     = searchParams.get('academicYear') || getCurrentAcademicYear();

    // ── Build where clause ──────────────────────────────────────────────────
    const where = {
      schoolId: school.id,
      ...(status && { status }),
      ...(search && {
        OR: [
          { firstName:       { contains: search, mode: 'insensitive' } },
          { lastName:        { contains: search, mode: 'insensitive' } },
          { admissionNumber: { contains: search, mode: 'insensitive' } },
          { studentId:       { contains: search, mode: 'insensitive' } },
          { parent: {
            OR: [
              { fatherMobile: { contains: search } },
              { motherMobile: { contains: search } },
            ]
          }},
        ],
      }),
      // Filter by class/section via academic history for the given year
      ...((cls || section) && {
        academicHistory: {
          some: {
            academicYear: year,
            ...(cls     && { class:   cls }),
            ...(section && { section: section }),
          },
        },
      }),
    };

    const [students, total] = await Promise.all([
      prisma.student.findMany({
        where,
        skip:  (page - 1) * limit,
        take:  limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id:              true,
          studentId:       true,
          admissionNumber: true,
          firstName:       true,
          middleName:      true,
          lastName:        true,
          gender:          true,
          bloodGroup:      true,
          photoUrl:        true,
          status:          true,
          admissionDate:   true,
          parentPrimaryMobile: true,
          createdAt:       true,
          parent: {
            select: {
              fatherName:   true,
              fatherMobile: true,
              motherName:   true,
              motherMobile: true,
              primaryContact: true,
            },
          },
          academicHistory: {
            where:   { academicYear: year },
            select:  { class: true, section: true, rollNumber: true, academicYear: true },
            take:    1,
          },
        },
      }),
      prisma.student.count({ where }),
    ]);

    return NextResponse.json({
      students,
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

// ─── POST — create student ──────────────────────────────────────────────────

export const POST = withSchool(async (request, username, school) => {
  try {
    const body = await request.json();
    const {
      // Personal
      firstName, middleName, lastName, dateOfBirth, gender,
      bloodGroup, aadharNumber, photoUrl,
      // Contact
      addressLine1, addressLine2, city, state, pinCode, country,
      parentPrimaryMobile, parentAlternateMobile, parentEmail,
      emergencyContactName, emergencyContactPhone,
      // Academic
      academicYear, class: cls, section, rollNumber,
      // Parent
      parent: parentData,
      // Transport
      usesTransport, transportRouteId, pickupPoint, dropPoint,
      // Fee assignment confirmed by user
      assignFee,
    } = body;

    // ── Count existing students for ID generation ──────────────────────────
    const existingCount = await prisma.student.count({ where: { schoolId: school.id } });
    const nowYear       = new Date().getFullYear();
    const currentYear   = getCurrentAcademicYear();
    const activeYear    = academicYear || currentYear;

    const studentId       = generateStudentId(school.schoolCode, nowYear, existingCount);
    const admissionNumber = generateAdmissionNumber(school.schoolCode, nowYear, existingCount);
    const qrCodeValue     = generateQrValue(studentId);

    // ── Check for fee structure (for Option B toast on frontend) ──────────
    const feeStructure = await prisma.feeStructure.findFirst({
      where: { schoolId: school.id, class: cls, academicYear: activeYear },
    });

    // ── Run everything in a single transaction ─────────────────────────────
    const result = await prisma.$transaction(async (tx) => {

      // 1. Create Parent
      const newParent = await tx.parent.create({
        data: {
          ...parentData,
          schoolId: school.id,
        },
      });

      // 2. Create Student
      const newStudent = await tx.student.create({
        data: {
          studentId,
          admissionNumber,
          qrCodeValue,
          firstName,
          middleName:      middleName || null,
          lastName,
          dateOfBirth:     new Date(dateOfBirth),
          gender,
          bloodGroup:      bloodGroup || null,
          aadharNumber:    aadharNumber || null,
          photoUrl:        photoUrl || null,
          parentPrimaryMobile,
          parentAlternateMobile: parentAlternateMobile || null,
          parentEmail:     parentEmail || null,
          emergencyContactName:  emergencyContactName || null,
          emergencyContactPhone: emergencyContactPhone || null,
          addressLine1,
          addressLine2:    addressLine2 || null,
          city,
          state,
          pinCode,
          country:         country || 'India',
          admissionDate:   new Date(),
          usesTransport:   usesTransport || false,
          transportRouteId: usesTransport ? transportRouteId || null : null,
          pickupPoint:     usesTransport ? pickupPoint || null : null,
          dropPoint:       usesTransport ? dropPoint || null : null,
          status:          'Active',
          schoolId:        school.id,
          parentId:        newParent.id,
        },
      });

      // 3. Create Academic History for current year
      await tx.studentAcademicHistory.create({
        data: {
          studentId:      newStudent.id,
          academicYear:   activeYear,
          class:          cls,
          section:        section || 'A',
          rollNumber:     parseInt(rollNumber) || 0,
          promotionStatus: 'NA',
        },
      });

      // 4. Auto-assign StudentFee if fee structure exists AND user confirmed
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

      // 5. Create Notification log (Welcome SMS auto-trigger)
      await tx.notification.create({
        data: {
          studentId:   newStudent.id,
          schoolId:    school.id,
          type:        'WELCOME',
          channel:     'SMS',
          status:      'PENDING',
          messageBody: `Welcome to ${school.schoolName}! ${firstName} ${lastName} (${admissionNumber}) has been successfully admitted. - ${school.schoolName}`,
          triggeredBy: 'AUTO',
        },
      });

      return { newStudent, newParent, studentFee };
    });

    return NextResponse.json({
      message:         'Student added successfully',
      studentId:       result.newStudent.studentId,
      admissionNumber: result.newStudent.admissionNumber,
      feeAssigned:     !!result.studentFee,
      // Tell frontend whether a fee structure was found (for toast)
      feeStructureFound: !!feeStructure,
      feeStructure:    feeStructure
        ? {
            class:              feeStructure.class,
            academicYear:       feeStructure.academicYear,
            tuitionFeeMonthly:  feeStructure.tuitionFeeMonthly,
            transportFeeMonthly: feeStructure.transportFeeMonthly,
          }
        : null,
    }, { status: 201 });

  } catch (error) {
    console.error('[POST /api/students]', error);
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Student with this Aadhar or mobile already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to add student' }, { status: 500 });
  }
});
