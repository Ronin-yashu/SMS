import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request) {
    try {
        const data = await request.json()
        const existingSchool = await prisma.school.findFirst({
            where: {
                OR: [
                    { schoolCode: data.schoolCode },
                    { officialEmail: data.officialEmail },
                    { adminEmail: data.adminEmail }
                ]
            }
        })
        if (existingSchool) {
            return NextResponse.json({ error: 'School with this code or email already exists' },{ status: 400 })
        }
        const School = await prisma.school.create({ data })
        return NextResponse.json(School, { status: 201 })
    } catch (error) {
        console.error('Error in registration of school:', error)
        return NextResponse.json({ error: 'Failed to register school' }, { status: 500 })
    }
}