import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request) {
    try {
        const data = await request.json()
        const School = await prisma.school.create({ data })
        return NextResponse.json(School, { status: 201 })
    } catch (error) {
        console.error('Error in registration of school:', error)
        return NextResponse.json({ error: 'Failed to register school' }, { status: 500 })

    }
}