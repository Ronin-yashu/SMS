"use client"
import { Bell, Search } from 'lucide-react'

export default function DashboardHeader({ title, subtitle }) {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      
      {/* Page Title */}
      <div>
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search... (Ctrl+K)"
            className="bg-transparent text-sm outline-none text-gray-600 w-48"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
      </div>
    </header>
  )
}
