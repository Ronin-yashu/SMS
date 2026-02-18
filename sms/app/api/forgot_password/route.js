import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateSecret, generate, verify } from "otplib";

export async function POST(request) {
    try {
        const data = await request.json()
        const School = await prisma.school.findUnique({
            where: {
                adminEmail: data.adminEmail,
                adminMobile: data.adminMobile
            }
        })
        if (!School) {
            return NextResponse.json({ error: 'No School found with the Provided Admin Credentials' }, { status: 404 })
        } else {
            const secret = generateSecret();
            console.log("Secret from otp package:", secret);
            return NextResponse.json({Message:'Admin Credentials Verified'},{status:200})
        }
    } catch (error) {
        console.error('Error in verification of admin:', error)
        return NextResponse.json({ error: 'Failed to verify admin credentials' }, { status: 500 })
    }
}