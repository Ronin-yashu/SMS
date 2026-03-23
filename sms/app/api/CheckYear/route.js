import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withSchool } from '@/lib/withAuth';

const ALL_CLASSES = ['1','2','3','4','5','6','7','8','9','10','11','12'];

export const POST = withSchool(async (request, username, school) => {
    try {
        const { academicYear } = await request.json();

        if (!academicYear) {
            return NextResponse.json({ error: 'Academic year is required' }, { status: 400 });
        }

        const existing = await prisma.feeStructure.findMany({
            where: {
                schoolId: school.id,
                academicYear,
            },
            select: { class: true }
        });

        const existingClasses = existing.map(item => item.class);
        const missingClasses = ALL_CLASSES.filter(c => !existingClasses.includes(c));

        return NextResponse.json({
            existingClasses,
            missingClasses,
            isComplete: missingClasses.length === 0,
            isEmpty: existingClasses.length === 0,
        }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to check year' }, { status: 500 });
    }
});
