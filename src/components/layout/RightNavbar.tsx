'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiShare2, FiUser, FiBook, FiHeart, FiCompass, FiInfo, FiMail, FiAward } from 'react-icons/fi'
import { bangersFont } from '@/styles/fonts'
import { useAuth } from '@/components/auth/auth-provider'

const RightNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, signOut } = useAuth()
  const router = useRouter()

  const navItems = [
    { href: '/recipes', label: 'More Recipes', icon: <FiBook size={24} /> },
    { href: '/reviews', label: 'Reviews', icon: <FiHeart size={24} /> },
    { href: '/guide', label: 'Guide', icon: <FiCompass size={24} /> },
    { href: '/dietary', label: 'Dietary Suggestions', icon: <FiAward size={24} /> },
    { href: '/about', label: 'About Us', icon: <FiInfo size={24} /> },
    { href: '/contact', label: 'Contact Us', icon: <FiMail size={24} /> },
  ]

  const handleAuthClick = (path: string) => {
    router.push(path)
    setIsOpen(false)
  }

  const handleLogout = async () => {
    await signOut()
    setIsOpen(false)
  }

  const containerVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "afterChildren"
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-14 z-50 p-3 bg-white rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      <motion.div 
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        className={`fixed right-0 top-0 h-full w-[300px] bg-white/95 backdrop-blur-sm shadow-lg z-40 ${bangersFont.className}`}
      >
        {/* Auth Buttons */}
        <motion.div 
          className="pt-20 px-6 flex gap-4"
          variants={itemVariants}
        >
          {user ? (
            <motion.button 
              onClick={handleLogout}
              className="w-full bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-2xl tracking-wider"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Logout
            </motion.button>
          ) : (
            <>
              <motion.button 
                onClick={() => handleAuthClick('/auth/signup')}
                className="flex-1 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-2xl tracking-wider"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Sign Up
              </motion.button>
              <motion.button 
                onClick={() => handleAuthClick('/auth/login')}
                className="flex-1 border-2 border-black px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-2xl tracking-wider"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Login
              </motion.button>
            </>
          )}
        </motion.div>

        {/* Navigation Links */}
        <nav className="mt-12 px-6">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                variants={itemVariants}
                custom={index}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-4 py-3 text-gray-600 hover:text-black transition-colors group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="transform transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="text-2xl tracking-wider">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Share Button */}
        <motion.div 
          className="absolute bottom-8 px-6 w-full"
          variants={itemVariants}
        >
          <Link href="/share">
            <motion.button 
              className="w-full flex items-center justify-center gap-3 py-4 text-gray-600 hover:text-black transition-colors border-2 border-gray-200 rounded-lg hover:border-black text-2xl tracking-wider"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiShare2 size={24} />
              <span>Share</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  )
}

export default RightNavbar 