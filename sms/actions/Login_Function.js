"use server"
import { prisma } from '@/lib/prisma';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const delay = (d) => {
  return new Promise((resolve) => setTimeout(resolve, d * 1000));
}

export const Login_Function = async (data) => {
  const cookieStore = await cookies()
  await delay(2);
  console.log("upcoming email", data.email);
  try {
    const school = await prisma.school.findUnique({
      where: {
        adminEmail: data.email
      }
    })
    if (school == null) {
      console.log("school is null or cannot find");
    } else {
      console.log("admin email is registered from ", school.schoolName);
      if (school.adminPassword == data.password) {
        console.log("password match");
        const payload = { username: data.email.split("@")[0], isAuthenticated: true }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        cookieStore.set({
          name: 'manually-session-token',
          value: token,            
          httpOnly: true,        
          secure: process.env.NODE_ENV === 'production', 
          maxAge: 60 * 60,          
          path: '/',                
          sameSite: 'strict',       
        });
        redirect(`/${data.email.split("@")[0]}`)
      } else {
        console.log("password doesn't match");
      }
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error; // Re-throw the redirect error
    }
    console.log("Something went wrong", error);
  }
}

