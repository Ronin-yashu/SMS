"use client"
import React from 'react'
import Link from 'next/link'
import { DropdownMenu, Button } from '@radix-ui/themes'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const [isClient, setisClient] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => { setisClient(true) }, [])
  React.useEffect(() => { setMobileOpen(false) }, [pathname])

  if (!isClient) return null

  const isAuthPage = pathname === '/login' || pathname === '/register'
  const publicRoutes = ['/', '/pricing', '/contribute', '/about', '/Blog', '/login', '/register', '/forgot-password']
  const isPublicRoute = publicRoutes.includes(pathname)
  const isLoggedIn = !!(session) || !isPublicRoute

  const handleOAuthSignOut = () => signOut({ callbackUrl: '/login' })

  const handleManualSignOut = async () => {
    await fetch('/api/signout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  const AuthButton = () => {
    if (isAuthPage) return null
    if (session) {
      return (
        <button onClick={handleOAuthSignOut} className="text-white bg-linear-to-br from-purple-600 to-blue-500 font-medium rounded-2xl text-sm px-4 py-2.5">
          Sign-out
        </button>
      )
    }
    if (!isPublicRoute) {
      return (
        <button onClick={handleManualSignOut} className="text-white bg-linear-to-br from-purple-600 to-blue-500 font-medium rounded-2xl text-sm px-4 py-2.5">
          Sign-out
        </button>
      )
    }
    return (
      <Link className="text-white bg-linear-to-br from-purple-600 to-blue-500 font-medium rounded-2xl text-sm px-4 py-2.5" href="/login">
        Sign-in
      </Link>
    )
  }

  return (
    <nav className='bg-white shadow-md'>
      <div className='flex justify-between px-6 md:px-8 items-center h-18'>

        <div className='flex items-center gap-3'>
          {isLoggedIn && (
            <button
              id="sidebar-toggle"
              className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition'
              onClick={() => {
                const event = new CustomEvent('toggle-sidebar')
                window.dispatchEvent(event)
              }}
            >
              <Menu size={22} />
            </button>
          )}

          <div className='flex flex-col justify-center items-center gap-1'>
            <div onClick={() => router.push('/')} className='text-3xl md:text-4xl font-bold cursor-pointer'>
              <span className='text-blue-600'>O</span>
              <span className='text-blue-900'>z</span>
              <span className='text-purple-600'>O</span>
              <span className='text-orange-500'>f</span>
              <span className='text-orange-500'>f</span>
            </div>
            <div className='hidden sm:flex font-light text-xs md:text-sm leading-4 text-blue-800'>
              <span>Ten Zero : Four Five</span>
            </div>
          </div>
        </div>

        {!isLoggedIn && (
          <>
            <ul className='hidden md:flex gap-8 justify-center items-center text-orange-500 font-semibold text-lg'>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contribute">Contribute</Link>
              <Link href="/about">About</Link>
              <Link href="/Blog">Blog</Link>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="ghost" size="3">More <DropdownMenu.TriggerIcon /></Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item shortcut="⌘ D">Documentation</DropdownMenu.Item>
                  <DropdownMenu.Item shortcut="⌘ R">Releases</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item shortcut="⌘ S">Support</DropdownMenu.Item>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent>
                      <DropdownMenu.Item>Meet an advisor</DropdownMenu.Item>
                      <DropdownMenu.Item>Customer References</DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item>Implementation Services</DropdownMenu.Item>
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Sub>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Github</DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </ul>

            <div className='flex md:hidden items-center gap-3'>
              <AuthButton />
              <button onClick={() => setMobileOpen(!mobileOpen)} className='p-2 rounded-lg hover:bg-gray-100 transition'>
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </>
        )}

        <div className={`${isLoggedIn ? 'flex' : 'hidden md:flex'} gap-4 items-center`}>
          <AuthButton />
        </div>

      </div>

      {!isLoggedIn && mobileOpen && (
        <div className='md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 bg-white'>
          <Link href="/pricing" className='text-orange-500 font-semibold text-base py-2 border-b border-gray-50'>Pricing</Link>
          <Link href="/contribute" className='text-orange-500 font-semibold text-base py-2 border-b border-gray-50'>Contribute</Link>
          <Link href="/about" className='text-orange-500 font-semibold text-base py-2 border-b border-gray-50'>About</Link>
          <Link href="/Blog" className='text-orange-500 font-semibold text-base py-2 border-b border-gray-50'>Blog</Link>
          <div className='flex flex-col gap-2 text-gray-600 text-sm pt-1'>
            <span className='font-medium text-gray-400 text-xs uppercase tracking-wider'>More</span>
            <Link href="#" className='py-1'>Documentation</Link>
            <Link href="#" className='py-1'>Releases</Link>
            <Link href="#" className='py-1'>Support</Link>
            <Link href="#" className='py-1'>Github</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
