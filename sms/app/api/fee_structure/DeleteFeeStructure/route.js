import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(request) {
    try {
        const data = await request.json();
        const DeleteStructure = await prisma.feeStructure.delete({
            where: {
                id: data.id,
            }
        });
        console.log('Deleted user:', DeleteStructure);
        return NextResponse.json({ message: 'Fee Structure Deleted' }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to Delete fee structure' }, { status: 500 });
    }
}
