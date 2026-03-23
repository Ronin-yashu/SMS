import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withSchool } from '@/lib/withAuth';

export const POST = withSchool(async (request, username, school) => {
    try {
        const data = await request.json();

        const currentYear = new Date().getFullYear();
        const academicYear = data.academicYear || `${currentYear}-${currentYear + 1}`;
        const mode = data.mode || 'skip';

        const { academicYear: _, mode: __, ...feeData } = data;

        if (mode === 'override') {
            await prisma.$transaction(async (tx) => {

                // Update all existing classes for this year
                await tx.feeStructure.updateMany({
                    where: {
                        schoolId: school.id,
                        academicYear,
                    },
                    data: { ...feeData }
                });

                // Create missing ones, skip already existing
                await tx.feeStructure.createMany({
                    data: Array.from({ length: 12 }, (_, i) => ({
                        class: String(i + 1),
                        academicYear,
                        ...feeData,
                        schoolId: school.id,
                    })),
                    skipDuplicates: true,
                });

            });
        } else {
            // skip mode — just create missing ones
            await prisma.$transaction(async (tx) => {
                await tx.feeStructure.createMany({
                    data: Array.from({ length: 12 }, (_, i) => ({
                        class: String(i + 1),
                        academicYear,
                        ...feeData,
                        schoolId: school.id,
                    })),
                    skipDuplicates: true,
                });
            });
        }

        return NextResponse.json({ message: 'Fee structure quick setup successful' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to set up fee structure' }, { status: 500 });
    }
});
