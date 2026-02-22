import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authenticator } from 'otplib';

export async function POST(request) {
    try {
        const { adminEmail, otp } = await request.json();
        
        const resetRequest = await prisma.passwordReset.findFirst({
            where: {
                adminEmail: adminEmail,
                expiresAt: { gt: new Date() }
            }
        });
        
        if (!resetRequest) {
            return NextResponse.json({ error: 'OTP expired or not found' }, { status: 404 });
        }

        if (resetRequest.attempts >= 5) {
            await prisma.passwordReset.delete({ where: { id: resetRequest.id } });
            return NextResponse.json({ error: 'Too many attempts. Request new OTP.' }, { status: 429 });
        }
        

        const isValid = authenticator.check(otp, resetRequest.otpSecret);
        
        if (!isValid) {
            await prisma.passwordReset.update({
                where: { id: resetRequest.id },
                data: { attempts: resetRequest.attempts + 1 }
            });
            return NextResponse.json({ 
                error: 'Invalid OTP',
                attemptsLeft: 5 - (resetRequest.attempts + 1)
            }, { status: 400 });
        }
        await prisma.passwordReset.update({
            where: { id: resetRequest.id },
            data: { attempts: -1 }
        });
        
        return NextResponse.json({ 
            message: 'OTP verified successfully',
            adminEmail: adminEmail 
        }, { status: 200 });
        
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
    }
}
