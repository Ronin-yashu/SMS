import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withSchool } from '@/lib/withAuth';

export const POST = withSchool(async (request, username, school) => {
    try {
        const data = await request.json();

        const existing = await prisma.feeStructure.findFirst({
            where: {
                schoolId: school.id,
                class: data.class,
                academicYear: data.academicYear,
            }
        });

        if (existing) {
            return NextResponse.json(
                { error: `Class ${data.class} (${data.academicYear}) already exists` },
                { status: 400 }
            );
        }

        await prisma.feeStructure.create({
            data: { ...data, schoolId: school.id }
        });

        return NextResponse.json({ message: 'Fee Structure Added' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to Add fee structure' }, { status: 500 });
    }
});
