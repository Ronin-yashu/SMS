import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(request) {
    try {
        const data = await request.json();
        const updatedStructure = await prisma.feeStructure.update({
            where: {
                id: data.id,
            },
            data: data
        });
        return NextResponse.json({ message: 'Fee Structure Updated' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to update fee structure' }, { status: 500 });
    }
}
