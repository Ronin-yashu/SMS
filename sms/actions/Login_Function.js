"use server"
import { prisma } from '@/lib/prisma';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';

const delay = (d) => {
  return new Promise((resolve) => setTimeout(resolve, d * 1000));
}

export const Login_Function = async (data) => {
  await delay(2);
  console.log("upcoming email",data.email);
  try {
    const school = await prisma.school.findUnique({
      where: {
        adminEmail: data.email
      }
    })
    if (school == null) {
      console.log("school is null or cannot find");
    }else{
      console.log("admin email is registered from " , school.schoolName);
      if (school.adminPassword == data.password) {
        console.log("password match");

        redirect(`/${data.email.split("@")[0]}`)
      }else{
        console.log("password doesn't match");
      }
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error; // Re-throw the redirect error
    }
    console.log("Something went wrong",error);
  }
}

