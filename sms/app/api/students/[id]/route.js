import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withSchool } from '@/lib/withAuth';

// ─── PATCH — update student basic info ──────────────────────────────────────

export const PATCH = withSchool(async (request, username, school, { params }) => {
  try {
    const { id } = await params;
    const body = await request.json();

    const {
      status,
      class: cls,
      section,
      rollNumber,
      parentPrimaryMobile,
      parentAlternateMobile,
      parentEmail,
      usesTransport,
      transportRouteId,
      pickupPoint,
      dropPoint,
    } = body;

    // ── Verify student belongs to this school ──────────────────────────────
    const student = await prisma.student.findFirst({
      where: { id, schoolId: school.id },
      select: { id: true, academicHistory: { orderBy: { createdAt: 'desc' }, take: 1 } },
    });

    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    // ── Build update payload — only include defined fields ─────────────────
    const updateData = {};
    if (status              !== undefined) updateData.status              = status;
    if (parentPrimaryMobile !== undefined) updateData.parentPrimaryMobile = parentPrimaryMobile;
    if (parentAlternateMobile !== undefined) updateData.parentAlternateMobile = parentAlternateMobile || null;
    if (parentEmail         !== undefined) updateData.parentEmail         = parentEmail || null;
    if (usesTransport       !== undefined) updateData.usesTransport       = usesTransport;
    if (transportRouteId    !== undefined) updateData.transportRouteId    = usesTransport ? transportRouteId || null : null;
    if (pickupPoint         !== undefined) updateData.pickupPoint         = usesTransport ? pickupPoint || null : null;
    if (dropPoint           !== undefined) updateData.dropPoint           = usesTransport ? dropPoint || null : null;

    // ── Run student update + optional academic history update ──────────────
    const updated = await prisma.$transaction(async (tx) => {
      const updatedStudent = await tx.student.update({
        where: { id },
        data:  updateData,
        select: {
          id:              true,
          studentId:       true,
          admissionNumber: true,
          firstName:       true,
          lastName:        true,
          status:          true,
          parentPrimaryMobile: true,
        },
      });

      // Update class/section/roll in the latest academic history entry
      if ((cls || section || rollNumber !== undefined) && student.academicHistory.length > 0) {
        const historyId = student.academicHistory[0].id;
        const historyUpdate = {};
        if (cls        !== undefined) historyUpdate.class      = cls;
        if (section    !== undefined) historyUpdate.section    = section;
        if (rollNumber !== undefined) historyUpdate.rollNumber = parseInt(rollNumber) || 0;

        await tx.studentAcademicHistory.update({
          where: { id: historyId },
          data:  historyUpdate,
        });
      }

      return updatedStudent;
    });

    return NextResponse.json({ message: 'Student updated successfully', student: updated }, { status: 200 });

  } catch (error) {
    console.error('[PATCH /api/students/[id]]', error);
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to update student' }, { status: 500 });
  }
});

// ─── DELETE — remove student + cascade ──────────────────────────────────────

export const DELETE = withSchool(async (request, username, school, { params }) => {
  try {
    const { id } = await params;

    // ── Verify student belongs to this school ──────────────────────────────
    const student = await prisma.student.findFirst({
      where: { id, schoolId: school.id },
      select: {
        id:              true,
        firstName:       true,
        lastName:        true,
        admissionNumber: true,
        parentId:        true,
        _count: { select: { studentFees: true, feePayments: true } },
      },
    });

    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    // ── Safety: block delete if student has payment records ────────────────
    if (student._count.feePayments > 0) {
      return NextResponse.json({
        error: `Cannot delete student with ${student._count.feePayments} payment record(s). Set status to "Inactive" instead.`,
      }, { status: 409 });
    }

    await prisma.$transaction(async (tx) => {
      // Delete student (cascades: academicHistory, documents, studentFees,
      // notifications via onDelete: Cascade in schema)
      await tx.student.delete({ where: { id } });

      // Check if parent has other students; if not, clean up
      const siblingCount = await tx.student.count({
        where: { parentId: student.parentId },
      });
      if (siblingCount === 0) {
        await tx.parent.delete({ where: { id: student.parentId } }).catch(() => {
          // Parent may have already been cleaned up or has other references; ignore
        });
      }
    });

    return NextResponse.json({
      message: `${student.firstName} ${student.lastName} (${student.admissionNumber}) deleted successfully`,
    }, { status: 200 });

  } catch (error) {
    console.error('[DELETE /api/students/[id]]', error);
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }
    if (error.code === 'P2003') {
      return NextResponse.json({ error: 'Cannot delete: student has linked records' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to delete student' }, { status: 500 });
  }
});

// ─── GET — single student detail ────────────────────────────────────────────

export const GET = withSchool(async (request, username, school, { params }) => {
  try {
    const { id } = await params;

    const student = await prisma.student.findFirst({
      where: { id, schoolId: school.id },
      include: {
        parent:          true,
        academicHistory: { orderBy: { academicYear: 'desc' } },
        documents:       { orderBy: { uploadedAt:   'desc' } },
        studentFees:     {
          include: { installments: { orderBy: { installmentNumber: 'asc' } } },
          orderBy: { academicYear: 'desc' },
        },
      },
    });

    if (!student) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 });
    }

    // Flatten latest academic year onto student object for convenience
    const latest = student.academicHistory[0] ?? null;
    const response = {
      ...student,
      currentClass:   latest?.class   ?? null,
      currentSection: latest?.section ?? null,
      currentRoll:    latest?.rollNumber ?? null,
    };

    return NextResponse.json({ student: response }, { status: 200 });

  } catch (error) {
    console.error('[GET /api/students/[id]]', error);
    return NextResponse.json({ error: 'Failed to fetch student' }, { status: 500 });
  }
});
