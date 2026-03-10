"use server"
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';
import DashboardHeader from '@/components/DashboardHeader';
import StatsCards from '@/components/StatsCards';
import QuickActions from '@/components/QuickActions';
import RecentActivity from '@/components/RecentActivity';

async function getDashboardData(username) {
  try {
    const school = await prisma.school.findFirst({
      where: {
        adminEmail: {
          startsWith: `${username}@`
        }
      }
    });

    if (!school) return null;
    const stats = {
      totalStudents: school.studentStrength,
      teachingStaff: school.teachingStaff,
      nonTeachingStaff: school.nonTeachingStaff,
      totalClasses: school.totalClasses,
      attendanceToday: '92%',
    };

    return { school, stats };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return null;
  }
}

const page = async ({ params }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('manually-session-token');

  const { username } = await params;
  
  const session = await getServerSession();
  if (!session) {
    try {
      const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
      if (decoded.username !== username) {
        notFound();
      }
    } catch (error) {
      console.log(error);
      return notFound();
    }
  } else {
    if (username !== session.user.email.split("@")[0]) {
      notFound();
    }
  }

  const data = await getDashboardData(username);
  
  if (!data) {
    return (
      <div className="p-6">
        <p className="text-red-500">Unable to load dashboard data. Please contact support.</p>
      </div>
    );
  }

  const { school, stats } = data;

  return (
    <div className="p-6 space-y-6 w-full">
      <DashboardHeader
        title="Dashboard"
        subtitle={`Welcome back! Here's what's happening at ${school.schoolName}`}
      />

      <StatsCards stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <QuickActions username={username} />
        <RecentActivity />
      </div>
    </div>
  );
};

export default page;
