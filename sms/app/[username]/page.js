import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth';

const page = async ({params}) => {
    const { username } = await params;
    const session = await getServerSession();
    console.log("Session in user page:", session);
    if (!session) {
      // const session = await getServerSession();
        console.log("No session found, redirecting to login");
        return redirect('/login');
    }
  return (
    <div>
        User Page for {username}
    </div>
  )
}

export default page