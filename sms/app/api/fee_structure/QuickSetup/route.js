import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import Check_fee_structure from '@/actions/Check_fee_structure';
import User_param from '@/actions/User_param';

export async function POST(request, { params }) {
    try {
        const data = await request.json();
        const username = User_param()
        const Validating_fee_structure = await Check_fee_structure(username)
        if (Validating_fee_structure) {
            return NextResponse.json({ error: 'Fee structure already exists for this user' }, { status: 400 });
        }
        console.log("incoming data from fee structure quick setup is", data);
        const school = await prisma.school.findFirst({
            where: {
                adminEmail: {
                    contains: `${username}@`
                }
            }
        });
        const currentYear = new Date().getFullYear();
        const academicYear = `${currentYear}-${currentYear + 1}`;
        for (let i = 1; i <= 12; i++) {
            const fee_structure = await prisma.feeStructure.create({
            data: {
                class:String(i),
                academicYear: academicYear,
                ...data,
                schoolId: school.id
            }
        });
        }
        return NextResponse.json({ message: 'Fee structure quick setup successful' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to set up fee structure' }, { status: 500 });
    }
}
