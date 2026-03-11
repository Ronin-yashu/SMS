import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import User_param from '@/actions/User_param';

export async function PATCH(request) {
    try {
        const username = await User_param();
        if (!username) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const data = await request.json();
        if (!data.id) {
            return NextResponse.json({ error: 'Fee structure ID is required' }, { status: 400 });
        }

        const updatedStructure = await prisma.feeStructure.update({
            where: { id: data.id },
            data: {
                tuitionFeeMonthly: data.tuitionFeeMonthly,
                transportFeeMonthly: data.transportFeeMonthly,
                examFeeYearly: data.examFeeYearly,
                admissionFee: data.admissionFee,
                booksFee: data.booksFee,
                idCardFee: data.idCardFee,
                activityFee: data.activityFee,
            }
        });

        return NextResponse.json({ message: 'Fee Structure Updated' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to update fee structure' }, { status: 500 });
    }
}
