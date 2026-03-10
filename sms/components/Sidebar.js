"use client"
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@radix-ui/themes'
import {
  LayoutDashboard, Users, UserCheck, BookOpen,
  ClipboardList, BarChart2, Calendar, Settings,
  ChevronLeft, ChevronRight, GraduationCap, Menu, X
} from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '' },
  { label: 'Students', icon: Users, href: 'students' },
  { label: 'Staff', icon: UserCheck, href: 'staff' },
  { label: 'Classes', icon: BookOpen, href: 'classes' },
  { label: 'Attendance', icon: ClipboardList, href: 'attendance' },
  { label: 'Reports', icon: BarChart2, href: 'reports' },
  { label: 'Calendar', icon: Calendar, href: 'calendar' },
  { label: 'Settings', icon: Settings, href: 'settings' },
]

export default function Sidebar({ username }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const NavContent = () => (
    <>
      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = item.href === ''
            ? pathname === `/${username}` || pathname === `/${username}/`
            : pathname.includes(item.href)
          return (
            <Link
              key={item.label}
              href={`/${username}/${item.href}`}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                ${isActive
                  ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                }`}
            >
              <item.icon size={20} className="shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {!collapsed && (
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {username?.[0]?.toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{username}</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      )}
    </>
  )

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-xl shadow border border-gray-100"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside className={`
        lg:hidden fixed top-0 left-0 h-full z-40 w-64 bg-white border-r border-gray-100 shadow-lg flex flex-col
        transition-transform duration-300
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap size={18} className="text-white" />
            </div>
            <span className="font-bold text-gray-800">SMS</span>
          </div>
          <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg hover:bg-gray-100">
            <X size={18} className="text-gray-500" />
          </button>
        </div>
        <NavContent />
      </aside>

       <aside className={`hidden lg:flex ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 h-full bg-white border-r border-gray-100 shadow-sm flex-col`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap size={18} className="text-white" />
              </div>
              <span className="font-bold text-gray-800">SMS</span>
            </div>
          )}
          <Button variant='ghost'
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>
        <NavContent />
      </aside>
    </>
  )
}
