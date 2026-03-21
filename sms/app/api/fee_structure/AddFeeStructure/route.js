import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withSchool } from '@/lib/withAuth';

export const POST = withSchool(async (request, username) => {
    try {
        const data = await request.json();
        await prisma.feeStructure.create({
            data: data
        });
        return NextResponse.json({ message: 'Fee Structure Added' }, { status: 200 });

    } catch (error) {
        if (error.code === 'P2025') {
            return NextResponse.json({ error: 'Not found or unauthorized' }, { status: 403 });
        }
        console.log(error);
        return NextResponse.json({ error: 'Failed to Add fee structure' }, { status: 500 });
    }
});
