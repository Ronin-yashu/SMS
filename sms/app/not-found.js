import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">
        Oops! Page not found
      </h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <Link href="/" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md">
        Return Home
        <ArrowRight className="inline-block ml-2" />
      </Link>
    </section>
  )
}
