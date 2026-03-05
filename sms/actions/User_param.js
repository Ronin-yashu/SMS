"use server"
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { getServerSession } from 'next-auth';

export default async function User_param() {
    const cookieStore = await cookies()
    const session = await getServerSession();
    try {
        if (!session) {
            const token = cookieStore.get('manually-session-token')
            const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
            if (decoded !== undefined) {
                return decoded.username
            } else {
                return null
            }
        } else {
            return session.user.email.split("@")[0]
        }
    } catch (error) {
        console.log(error);
    }
}