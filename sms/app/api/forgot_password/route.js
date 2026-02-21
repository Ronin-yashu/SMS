import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateSecret, generate, verify } from "otplib";
import Mailjet from 'node-mailjet';

export async function POST(request) {
    const secret = generateSecret();
    const token = await generate({ secret });
    try {
        const data = await request.json()
        console.log(data);
        const School = await prisma.school.findUnique({
            where: {
                adminEmail: data.adminEmail,
                adminMobile: data.adminMobile
            }
        })
        if (!School) {
            return NextResponse.json({ error: 'No School found with the Provided Admin Credentials' }, { status: 404 })
        } else {
            const mailjet = await Mailjet.apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY);
            const request = mailjet
                .post('send', { version: 'v3.1' })
                .request({
                    Messages: [
                        {
                            From: {
                                Email: process.env.SENDER_EMAIL,
                                Name: "Mailjet Pilot"
                            },
                            To: [
                                {
                                    Email: `${data.adminEmail}`,
                                    Name: "passenger 1"
                                }
                            ],
                            Subject: "Your email flight plan!",
                            TextPart: `${token} is your OTP for password reset. It is valid for 10 minutes.`,
                            HTMLPart: `<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />${token} is your OTP for password reset. It is valid for 10 minutes.`
                        }
                    ]
                })

            request
                .then((result) => {
                    console.log(result.body)
                })
                .catch((err) => {
                    console.log(err.statusCode)
                })
            return NextResponse.json({ Message: 'Admin Credentials Verified' }, { status: 200 })
        }
    } catch (error) {
        console.error('Error in verification of admin:', error)
        return NextResponse.json({ error: 'Failed to verify admin credentials' }, { status: 500 })
    }
}