'use client'

import React from 'react'
import Link from 'next/link'
import { bangersFont, jollyLodgerFont } from '@/styles/fonts'
import { motion } from 'framer-motion'
import { useAuth } from '@/components/auth/auth-provider'

const Header = () => {
  const { user, signOut } = useAuth()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/recipes', label: 'Recipes' },
    { href: '/categories', label: 'Categories' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className={`h-[80px] bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-between px-8 relative`}>
      {/* Logo */}
      <Link href="/" className={`text-4xl tracking-wider hover:text-gray-800 transition-colors ${jollyLodgerFont.className}`}>
        RAMEN MUNCHING
      </Link>

      {/* Navigation and Auth */}
      <div className="flex items-center">
        <nav className={`flex items-center space-x-8 ${bangersFont.className}`}>
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                className="text-2xl tracking-wider text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center ml-8">
          {user ? (
            <button
              onClick={() => signOut()}
              className="bg-[#2C2C2C] text-white px-6 py-2 text-[20px] hover:bg-black transition-colors"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-[20px] text-[#2C2C2C] hover:text-black transition-colors mr-6"
              >
                LOGIN
              </Link>
              <Link
                href="/auth/signup"
                className="bg-[#2C2C2C] text-white px-6 py-2 text-[20px] hover:bg-black transition-colors"
              >
                SIGN UP
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header 