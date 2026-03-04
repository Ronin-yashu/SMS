import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
const delay = (d) => {
  return new Promise((resolve) => setTimeout(resolve, d * 1000));
}
export async function POST(request) {
    try {
        const data = await request.json();
        await delay(7);
        console.log("incoming data from fee structure quick setup is", data);
        return NextResponse.json({ message: 'Fee structure quick setup successful' }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to set up fee structure' }, { status: 500 });
    }
}
