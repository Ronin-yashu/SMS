import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request) {
    try {
        const { adminEmail, newPassword } = await request.json();
        const resetRequest = await prisma.passwordReset.findFirst({
            where: {
                adminEmail: adminEmail,
                attempts: -1,
                expiresAt: { gt: new Date() }
            }
        });

        if (!resetRequest) {
            return NextResponse.json({ 
                error: 'OTP verification required or expired' 
            }, { status: 403 });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await prisma.school.update({
            where: { adminEmail: adminEmail },
            data: { 
                adminPassword: hashedPassword,
                confirmPassword: hashedPassword 
            }
        });
        await prisma.passwordReset.delete({
            where: { id: resetRequest.id }
        });

        return NextResponse.json({ 
            message: 'Password reset successful' 
        }, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ 
            error: 'Password reset failed' 
        }, { status: 500 });
    }
}
