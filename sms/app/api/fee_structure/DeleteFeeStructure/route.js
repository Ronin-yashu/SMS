import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withAuth } from '@/lib/withAuth';

export const DELETE = withAuth(async (request, username) => {
    try {
        const data = await request.json();
        if (!data.id) {
            return NextResponse.json({ error: 'Fee structure ID is required' }, { status: 400 });
        }

        // ✅ Ownership check — only deletes if fee structure belongs to logged-in school
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
});
