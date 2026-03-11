import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import User_param from '@/actions/User_param';

export async function DELETE(request) {
    try {
        const username = await User_param();
        if (!username) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const data = await request.json();
        if (!data.id) {
            return NextResponse.json({ error: 'Fee structure ID is required' }, { status: 400 });
        }

        // ✅ Ownership check — only deletes if fee structure belongs to the logged-in school
        await prisma.feeStructure.delete({
            where: {
                id: data.id,
                school: {
                    adminEmail: { startsWith: `${username}@` }
                }
            }
        });

        return NextResponse.json({ message: 'Fee Structure Deleted' }, { status: 200 });

    } catch (error) {
        if (error.code === 'P2025') {
            return NextResponse.json({ error: 'Not found or unauthorized' }, { status: 403 });
        }
        console.log(error);
        return NextResponse.json({ error: 'Failed to Delete fee structure' }, { status: 500 });
    }
}
