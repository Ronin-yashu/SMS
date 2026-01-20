"use client"
import React from 'react'
import Link from 'next/link'
import { DropdownMenu, Button } from '@radix-ui/themes'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
 
  return (
    <nav className='flex justify-between px-8 items-center h-18 bg-white shadow-md'>
      <div className='flex flex-col justify-center items-center gap-1'>
        <div className='text-4xl font-bold'>
          <span className='text-blue-600'>O</span>
          <span className='text-blue-900'>z</span>
          <span className='text-purple-600'>O</span>
          <span className='text-orange-500'>f</span>
          <span className='text-orange-500'>f</span>
        </div>
        <div className='flex flex-col justify-center items-center font-light text-sm leading-4 text-blue-800'>
          <span>Ten Zero : Four Five</span>
        </div>
      </div>
      <ul className='flex gap-8 justify-center items-center text-orange-500 font-semibold text-lg'>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contribute">Contribute</Link>
        <Link href="/about">About</Link>
        <Link href="/Blog">Blog</Link>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost" size="3">
              More
              <DropdownMenu.TriggerIcon />
            </Button>
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
      <div className='flex gap-4 justify-center items-center'>
        {pathname !== "/login" && <Link className='text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-2xl rounded-base text-sm px-4 py-2.5 text-center leading-5' href="/login">Sign-in</Link>}
      </div>
    </nav>
  )
}

export default Navbar