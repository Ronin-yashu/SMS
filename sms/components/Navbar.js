import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 items-center h-16 border-b'>
      <h1 className='text-2xl font-bold'>OzOff</h1>
      <ul className='flex gap-4 text-blue-900 font-semibold'>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </ul>
    </nav>
  )
}

export default Navbar