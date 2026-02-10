"use client"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useSession } from 'next-auth/react';

export default function NotFound() {
  const { status } = useSession();
  if (status === "unauthenticated") {
    var isAuthorized = false;
    console.log(isAuthorized);
    
  } else {
    var isAuthorized = true;
    console.log(isAuthorized);
  }
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">

      {isAuthorized ? <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1> : <h1 className="text-8xl font-bold text-gray-800 mb-4">401</h1>}

      {isAuthorized ? <h2 className="text-2xl font-semibold text-gray-700 ">Oops! Page not found</h2> : <h2 className="text-2xl font-semibold text-gray-700 ">Oops! You are not authorized</h2>}

      {isAuthorized ? <p className="text-gray-500 mb-8 text-center max-w-md">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p> : <p className="text-gray-500 mb-8 text-center max-w-md">You are not authorized to access this page.</p>}

      {isAuthorized ? <Link href="/" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md">
        Return Home
        <ArrowRight className="inline-block ml-2" />
      </Link> : <Link href="/login" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md">
        Go to Login
        <ArrowRight className="inline-block ml-2" />
      </Link>}
      
    </section>
  )
}
