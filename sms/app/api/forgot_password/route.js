import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateSecret, generate } from 'otplib';
import Mailjet from 'node-mailjet';
// import crypto from 'node:crypto';

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
        }
        const existingReset = await prisma.passwordReset.findFirst({
            where: {
                adminEmail: data.adminEmail
            }
        })
        const mailjet = Mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);
        if (!existingReset) {
            const secret = generateSecret();
            const otp = await generate({ secret, strategy: "hotp", counter: 0 });
            const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

            await prisma.passwordReset.create({
                data: {
                    adminEmail: data.adminEmail,
                    otpSecret: secret,
                    expiresAt: expiresAt,
                    attempts: 0
                }
            });
            await mailjet.post('send', { version: 'v3.1' }).request({
                Messages: [
                    {
                        From: {
                            Email: process.env.SENDER_EMAIL,
                            Name: "SMS Team"
                        },
                        To: [
                            {
                                Email: `${data.adminEmail}`,
                                Name: "Admin"
                            }
                        ],
                        Subject: "Password Reset OTP",
                        TextPart: `${otp} is your OTP for password reset. Valid for 10 minutes.`,
                        HTMLPart: `<h3>Password Reset</h3><p>${otp} is your OTP. Valid for 10 minutes.</p>`
                    }
                ]
            })
            return NextResponse.json({ Message: 'OTP sent successfully' },{adminEmail:data.adminEmail}, { status: 200 })
        }

        const otp = await generate({ secret: existingReset.otpSecret, strategy: "hotp", counter: 0 })
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000)
        await prisma.passwordReset.update({
            where: { adminEmail: data.adminEmail },
            data: {
                expiresAt: expiresAt,
                attempts: 0
            }
        })

        await mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: process.env.SENDER_EMAIL,
                        Name: "SMS Team"
                    },
                    To: [
                        {
                            Email: `${data.adminEmail}`,
                            Name: "Admin"
                        }
                    ],
                    Subject: "Password Reset OTP",
                    TextPart: `${otp} is your OTP for password reset. Valid for 10 minutes.`,
                    HTMLPart: `<h3>Password Reset</h3><p>${otp} is your OTP. Valid for 10 minutes.</p>`
                }
            ]
        })
        return NextResponse.json({ Message: 'OTP sent successfully', adminEmail: data.adminEmail }, { status: 200 })

    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 });
    }
}