import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import Check_fee_structure from '@/actions/Check_fee_structure';
import User_param from '@/actions/User_param';

export async function PATCH(request) {
    try {
        const data = await request.json();
        return NextResponse.json({ message: 'PATCH request to edit fee structure hit',data }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to set up fee structure' }, { status: 500 });
    }
}
