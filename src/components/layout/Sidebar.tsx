'use client'

import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  const navItems = [
    { href: '/about', label: 'ABOUT' },
    { href: '/menu', label: 'MENU' },
    { href: '/shop', label: 'SHOP' },
    { href: '/order', label: 'ORDER' },
  ]

  const socialItems = [
    { href: '/fb', label: 'FB' },
    { href: '/ig', label: 'IG' },
  ]

  return (
    <aside className="w-[80px] border-l border-[#2C2C2C]/20 flex flex-col justify-between py-8 text-[36px] text-[#000000] fixed right-0 top-0 h-full bg-[#F5EFE6] z-50">
      <nav className="space-y-8">
        <div className="px-6">
          <Link href="/" className="font-bold">
            JDM
          </Link>
        </div>
        <div className="space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-2 tracking-wider hover:text-[#2C2C2C]/60 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="px-6 space-y-4">
        {socialItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block tracking-wider hover:text-[#2C2C2C]/60 transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <div className="mt-4">聯絡我們</div>
      </div>
    </aside>
  )
}

export default Sidebar 