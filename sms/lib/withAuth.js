import { NextResponse } from 'next/server';
import User_param from '@/actions/User_param';
import { prisma } from '@/lib/prisma';

/**
 * withAuth - Ensures user is logged in
 * Injects `username` into handler
 * Usage: export const GET = withAuth(async (request, username) => { ... })
 */
export function withAuth(handler) {
    return async (request) => {
        try {
            const username = await User_param();
            if (!username) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }
            return await handler(request, username);
        } catch (error) {
            console.log(error);
            return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        }
    };
}

/**
 * withSchool - Ensures user is logged in AND their school exists
 * Injects `username` and `school` into handler
 * Eliminates repeated prisma.school.findFirst in every route
 * Usage: export const POST = withSchool(async (request, username, school) => { ... })
 */
export function withSchool(handler) {
    return async (request) => {
        try {
            const username = await User_param();
            if (!username) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }

            const school = await prisma.school.findFirst({
                where: {
                    adminEmail: { startsWith: `${username}@` }
                }
            });

            if (!school) {
                return NextResponse.json({ error: 'School not found' }, { status: 404 });
            }

            return await handler(request, username, school);
        } catch (error) {
            console.log(error);
            return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        }
    };
}
