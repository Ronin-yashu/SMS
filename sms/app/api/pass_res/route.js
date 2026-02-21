import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateSecret, generate, verify } from "otplib";
import Mailjet from 'node-mailjet';

export async function POST(request) {
    const data = await request.json()
    
}