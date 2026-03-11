import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import Check_fee_structure from '@/actions/Check_fee_structure';
import { withSchool } from '@/lib/withAuth';

export const POST = withSchool(async (request, username, school) => {
    try {
        const data = await request.json();

        const Validating_fee_structure = await Check_fee_structure(username);
        if (Validating_fee_structure && Validating_fee_structure.length > 0) {
            return NextResponse.json({ error: 'Fee structure already exists for this school' }, { status: 400 });
        }

        const currentYear = new Date().getFullYear();
        const academicYear = `${currentYear}-${currentYear + 1}`;

        // ✅ Transaction — all 12 classes or none
        await prisma.$transaction(async (tx) => {
            await tx.feeStructure.createMany({
                data: Array.from({ length: 12 }, (_, i) => ({
                    class: String(i + 1),
                    academicYear,
                    ...data,
                    schoolId: school.id  // school injected by withSchool — no extra DB query
                }))
            });
        });

        return NextResponse.json({ message: 'Fee structure quick setup successful' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to set up fee structure' }, { status: 500 });
    }
});
