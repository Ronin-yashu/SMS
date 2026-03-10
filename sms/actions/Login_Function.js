"use server"
import { prisma } from '@/lib/prisma';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

export const Login_Function = async (data) => {
  const cookieStore = await cookies()

  try {
    const school = await prisma.school.findUnique({
      where: {
        adminEmail: data.email
      }
    })

    if (school == null) {
      throw new Error('No account found with this email')
    }

    if (!bcrypt.compareSync(data.password, school.adminPassword)) {
      throw new Error('Incorrect password')
    }

    const payload = { username: data.email.split("@")[0], isAuthenticated: true }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });

    cookieStore.set({
      name: 'manually-session-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      path: '/',
      sameSite: 'strict',
    });

    redirect(`/${data.email.split("@")[0]}`)

  } catch (error) {
    if (isRedirectError(error)) {
      throw error  // let redirect happen normally
    }
    throw new Error(error.message || 'Something went wrong')
  }
}
