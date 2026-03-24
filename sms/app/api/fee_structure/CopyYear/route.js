import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withSchool } from '@/lib/withAuth';

export const POST = withSchool(async (request, username, school) => {
    try {
        const { fromYear, toYear, increasePercent = 0, mode = 'skip' } = await request.json();

        if (!fromYear || !toYear) {
            return NextResponse.json({ error: 'fromYear and toYear are required' }, { status: 400 });
        }

        if (fromYear === toYear) {
            return NextResponse.json({ error: 'From year and To year cannot be the same' }, { status: 400 });
        }

        const sourceData = await prisma.feeStructure.findMany({
            where: { schoolId: school.id, academicYear: fromYear },
        });

        if (sourceData.length === 0) {
            return NextResponse.json({ error: `No fee structure found for ${fromYear}` }, { status: 404 });
        }

        const multiplier = 1 + (increasePercent / 100);
        const applyIncrease = (value) => Math.round(value * multiplier);

        const newRecords = sourceData.map(item => ({
            class: item.class,
            academicYear: toYear,
            schoolId: school.id,
            tuitionFeeMonthly: applyIncrease(item.tuitionFeeMonthly),
            transportFeeMonthly: applyIncrease(item.transportFeeMonthly),
            examFeeYearly: applyIncrease(item.examFeeYearly),
            admissionFee: applyIncrease(item.admissionFee),
            booksFee: applyIncrease(item.booksFee),
            idCardFee: applyIncrease(item.idCardFee),
            activityFee: applyIncrease(item.activityFee),
        }));

        if (mode === 'override') {
            await prisma.$transaction([
                prisma.feeStructure.deleteMany({
                    where: { schoolId: school.id, academicYear: toYear },
                }),
                prisma.feeStructure.createMany({
                    data: newRecords,
                }),
            ]);
        } else {
            // skip — just insert, skip existing
            await prisma.feeStructure.createMany({
                data: newRecords,
                skipDuplicates: true,
            });
        }

        return NextResponse.json({
            message: `Fee structure copied from ${fromYear} to ${toYear} successfully`,
            copied: newRecords.length,
        }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to copy fee structure' }, { status: 500 });
    }
});