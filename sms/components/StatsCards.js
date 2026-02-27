import { Users, UserCheck, BookOpen, TrendingUp } from 'lucide-react'

export default function StatsCards({ stats }) {
  const cards = [
    {
      label: 'Total Students',
      value: stats?.totalStudents || '0',
      change: '+12 this month',
      icon: Users,
      bg: 'bg-blue-50',
      text: 'text-blue-600'
    },
    {
      label: 'Teaching Staff',
      value: stats?.teachingStaff || '0',
      change: '+2 this month',
      icon: UserCheck,
      bg: 'bg-purple-50',
      text: 'text-purple-600'
    },
    {
      label: 'Total Classes',
      value: stats?.totalClasses || '0',
      change: '3 sections each',
      icon: BookOpen,
      bg: 'bg-emerald-50',
      text: 'text-emerald-600'
    },
    {
      label: "Today's Attendance",
      value: stats?.attendanceToday || 'N/A',
      change: '+3% vs yesterday',
      icon: TrendingUp,
      bg: 'bg-orange-50',
      text: 'text-orange-600'
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {cards.map((stat) => (
        <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className={`${stat.bg} p-3 rounded-xl`}>
              <stat.icon size={22} className={stat.text} />
            </div>
            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
              {stat.change}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
