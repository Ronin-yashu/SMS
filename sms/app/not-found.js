'use client'
import Link from 'next/link'
import { ArrowRight, Home, LogIn } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const { status } = useSession()
  const [hasManualSession, setHasManualSession] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      fetch('/api/check-auth')
        .then(res => res.json())
        .then(data => {
          setHasManualSession(data.loggedIn)
          setChecked(true)
        })
        .catch(() => setChecked(true))
    } else {
      setChecked(true)
    }
  }, [status])

  if (!checked || status === 'loading') {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </section>
    )
  }

  const isLoggedIn = status === 'authenticated' || hasManualSession

  const code = isLoggedIn ? '404' : '401'
  const title = isLoggedIn ? 'Page Not Found' : 'Not Authorized'
  const message = isLoggedIn
    ? "The page you're looking for doesn't exist or has been moved."
    : "You don't have permission to access this page. Please log in."
  const btnHref = isLoggedIn ? '/' : '/login'
  const BtnIcon = isLoggedIn ? Home : LogIn
  const btnLabel = isLoggedIn ? 'Return Home' : 'Go to Login'

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-linear-to-br from-blue-500 to-purple-600">
          {code}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-500">{message}</p>
        <Link
          href={btnHref}
          className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-linear-to-br from-blue-500 to-purple-600 text-white rounded-full hover:opacity-90 transition shadow-md font-medium"
        >
          <BtnIcon size={18} />
          {btnLabel}
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
