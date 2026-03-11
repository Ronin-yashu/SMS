import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withAuth } from '@/lib/withAuth';

export const PATCH = withAuth(async (request, username) => {
    try {
        const data = await request.json();
        if (!data.id) {
            return NextResponse.json({ error: 'Fee structure ID is required' }, { status: 400 });
        }

        // ✅ Ownership check — only updates if fee structure belongs to logged-in school
        await prisma.feeStructure.update({
            where: {
                id: data.id,
                school: {
                    adminEmail: { startsWith: `${username}@` }
                }
            },
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
        if (error.code === 'P2025') {
            return NextResponse.json({ error: 'Not found or unauthorized' }, { status: 403 });
        }
        console.log(error);
        return NextResponse.json({ error: 'Failed to update fee structure' }, { status: 500 });
    }
});
