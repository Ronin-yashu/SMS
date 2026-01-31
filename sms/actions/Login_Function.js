"use server"
import { prisma } from '@/lib/prisma';

const delay = (d) => {
  return new Promise((resolve) => setTimeout(resolve, d * 1000));
}

export const Login_Function = async (data) => {

  await delay(2);
  console.log(data.email);

  try {
    const school = await prisma.school.findUnique({
      where: {
        adminEmail: data.email
      }
    })
    // console.log(school);
    if (school == null) {
      console.log("school is null or cannot find");
    }else{
      console.log(school.schoolName);
      if (school.adminPassword == data.password) {
        console.log("password match");
      }else{
        console.log("password doesn't match");
      }
    }
  } catch (error) {
    console.log("Something went wrong",error);
  }
  
}

