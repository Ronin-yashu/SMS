const activities = [
  { text: 'New student Rahul Sharma added to Class 10A', time: '5 min ago', type: 'student' },
  { text: 'Attendance marked for Class 9B - 96% present', time: '20 min ago', type: 'attendance' },
  { text: 'Monthly report generated for January 2026', time: '1 hour ago', type: 'report' },
  { text: 'Teacher Priya Mehta profile updated', time: '2 hours ago', type: 'staff' },
  { text: 'New student Ananya Singh added to Class 8C', time: '3 hours ago', type: 'student' },
]

export default function RecentActivity() {
  return (
    <div className="lg:col-span-2 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
      <h2 className="font-semibold text-gray-800 mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0">
            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700 leading-snug">{activity.text}</p>
              <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
