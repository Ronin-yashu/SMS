"use server"
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import DashboardHeader from '@/components/DashboardHeader';
import StatsCards from '@/components/StatsCards';
import QuickActions from '@/components/QuickActions';
import RecentActivity from '@/components/RecentActivity';
// import { refresh } from 'next/cache'
// Commented console.log can be used for debugging 
const page = async ({ params }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('manually-session-token')
  // console.log("type of Token is ", typeof (token));

  const { username } = await params;
  // console.log(await params);
  const session = await getServerSession();
  if (!session) {
    // console.log("No session found from next-auth, unauthorized access to user page.");
    // console.log("username from params is ", username);
    try {
      const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
      // console.log("username from decode is", decoded.username);
      if (decoded.username == username) {
        // console.log("verified with crenditals");
        // console.log(decoded);
        // refresh()
      } else {
        // console.log("token and username not match");
        notFound()
      }
    } catch (error) {
      console.log(error);
      return notFound();
    }
  } else {
    if (username !== session.user.email.split("@")[0]) {
      notFound()
    } else {
      // console.log("session param username",username);
      // console.log("session next auth name",session.user.email.split("@")[0]);
      // refresh()
    }
  }

  return (
    <div className="p-6 space-y-6">
      <DashboardHeader
        title="Dashboard"
        subtitle={`Welcome back! Here's what's happening at ${school.schoolName}`}
      />

      {/* Stats with real data */}
      <StatsCards stats={stats} />

      {/* Quick Actions + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <QuickActions username={username} />
        <RecentActivity />
      </div>
    </div>
  )
}

export default page