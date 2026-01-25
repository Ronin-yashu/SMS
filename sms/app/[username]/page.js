import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

const page = async ({ params }) => {
  const { username } = await params;
  const session = await getServerSession();
  console.log("Session in user page:", session);
  if (!session) {
    console.log("No session found, unauthorized access to user page.");
    return notFound();
  }
  return (
    <div>
      User Page for {username}
    </div>
  )
}

export default page