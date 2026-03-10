"use client"
import Link from 'next/link'
import { ClipboardList, UserPlus, BarChart2, Calendar } from 'lucide-react'

const actions = [
  { label: 'Add Student', icon: UserPlus, color: 'bg-blue-500', href: 'students/new' },
  { label: 'Mark Attendance', icon: ClipboardList, color: 'bg-purple-500', href: 'attendance' },
  { label: 'View Reports', icon: BarChart2, color: 'bg-emerald-500', href: 'reports' },
  { label: 'School Calendar', icon: Calendar, color: 'bg-orange-500', href: 'calendar' },
]

export default function QuickActions({ username }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
      <h2 className="font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={`/${username}/${action.href}`}
            className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <div className={`${action.color} p-2.5 sm:p-3 rounded-xl`}>
              <action.icon size={18} className="text-white" />
            </div>
            <span className="text-xs font-medium text-gray-600 text-center leading-tight">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
