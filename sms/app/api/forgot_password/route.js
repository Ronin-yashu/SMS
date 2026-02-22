import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import Mailjet from 'node-mailjet';

export async function POST(request) {
    try {
        const data = await request.json();
        const School = await prisma.school.findUnique({
            where: {
                adminEmail: data.adminEmail,
                adminMobile: data.adminMobile
            }
        });
        if (!School) {
            return NextResponse.json({ error: 'No School found with the provided credentials' }, { status: 404 });
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        await prisma.passwordReset.deleteMany({
            where: { adminEmail: data.adminEmail }
        });
        await prisma.passwordReset.create({
            data: {
                adminEmail: data.adminEmail,
                otpSecret: otp,
                expiresAt: new Date(Date.now() + 10 * 60 * 1000),
                attempts: 0
            }
        });
        const mailjet = Mailjet.apiConnect(
            process.env.MAILJET_API_KEY,
            process.env.MAILJET_SECRET_KEY
        );
        await mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [{
                From: {
                    Email: process.env.SENDER_EMAIL,
                    Name: "SMS Team"
                },
                To: [{
                    Email: data.adminEmail,
                    Name: School.adminName
                }],
                Subject: "Password Reset OTP",
                TextPart: `${otp} is your OTP for password reset. Valid for 10 minutes.`,
                HTMLPart: `<h3>Password Reset Request</h3><p><strong>${otp}</strong> is your OTP for password reset.</p><p>Valid for 10 minutes.</p><p>If you didn't request this, please ignore this email.</p>`
            }]
        });
        return NextResponse.json({
            message: 'OTP sent successfully',
            adminEmail: data.adminEmail
        }, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 });
    }
}
