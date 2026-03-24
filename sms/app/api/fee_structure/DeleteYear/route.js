import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withSchool } from '@/lib/withAuth';

export const DELETE = withSchool(async (request, username, school) => {
    try {
        const { academicYear } = await request.json();

        if (!academicYear) {
            return NextResponse.json({ error: 'academicYear is required' }, { status: 400 });
        }

        const result = await prisma.feeStructure.deleteMany({
            where: { schoolId: school.id, academicYear },
        });

        return NextResponse.json({
            message: `Deleted all fee structures for ${academicYear}`,
            deleted: result.count,
        }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to delete fee structure' }, { status: 500 });
    }
});