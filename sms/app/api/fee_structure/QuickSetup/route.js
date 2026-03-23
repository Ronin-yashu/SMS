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
                for (let i = 1; i <= 12; i++) {
                    await tx.feeStructure.upsert({
                        where: {
                            schoolId_class_academicYear: {
                                schoolId: school.id,
                                class: String(i),
                                academicYear,
                            }
                        },
                        update: { ...feeData },
                        create: {
                            class: String(i),
                            academicYear,
                            ...feeData,
                            schoolId: school.id,
                        }
                    });
                }
            });
        } else {
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
