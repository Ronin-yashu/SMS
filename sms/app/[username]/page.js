"use server"
import { getServerSession  } from 'next-auth';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const page = async ({ params }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('manually-session-token')
  console.log("type of Token is ",typeof(token));
  
  const { username } = await params;
  console.log(await params);
  const session = await getServerSession();
  if (!session) {
    console.log("No session found from next-auth, unauthorized access to user page.");
    try {
      const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
      if (decoded) {
        console.log("verified with crenditals");
      }
    } catch (error) {
      console.log(error);
      return notFound();
    }
  }
  return (
    <div>
      User Page for {username}
    </div>
  )
}

export default page