import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import Check_fee_structure from '@/actions/Check_fee_structure';
import User_param from '@/actions/User_param';

export async function POST(request) {
    try {
        const data = await request.json();
        const username = await User_param();
        if (!username) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const Validating_fee_structure = await Check_fee_structure(username);
        if (Validating_fee_structure.length > 0) {
            return NextResponse.json({ error: 'Fee structure already exists for this school' }, { status: 400 });
        }
        const school = await prisma.school.findFirst({
            where: {
                adminEmail: {
                    contains: `${username}@`
                }
            }
        });
        if (!school) {
            return NextResponse.json({ error: 'School not found for this user' }, { status: 404 });
        }
        const currentYear = new Date().getFullYear();
        const academicYear = `${currentYear}-${currentYear + 1}`;
        await prisma.feeStructure.createMany({
            data: Array.from({ length: 12 }, (_, i) => ({
                class: String(i + 1),
                academicYear,
                ...data,
                schoolId: school.id
            }))
        });

        return NextResponse.json({ message: 'Fee structure quick setup successful' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to set up fee structure' }, { status: 500 });
    }
}
