import { getServerSession  } from 'next-auth';
import { notFound } from 'next/navigation';

const page = async ({ params }) => {
  const { username } = await params;
  console.log(await params);
  
  const session = await getServerSession();
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