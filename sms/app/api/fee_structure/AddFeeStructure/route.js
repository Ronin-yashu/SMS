import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import Check_fee_structure from '@/actions/Check_fee_structure';
import { withSchool } from '@/lib/withAuth';

export const POST = withSchool(async (request, username, school) => {
    try {
        const data = await request.json();
        return NextResponse.json({message : 'Success'},{status : 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to set up fee structure' }, { status: 500 });
    }
});
