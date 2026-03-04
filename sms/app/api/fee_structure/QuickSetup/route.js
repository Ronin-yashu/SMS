import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request) {
    try {
        const data = await request.json();
        console.log("incoming data from fee structure quick setup is", data);
        return NextResponse.json({ message: 'Fee structure quick setup successful' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to set up fee structure' }, { status: 500 });
    }
}
