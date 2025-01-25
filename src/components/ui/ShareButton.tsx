'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bangersFont } from '@/styles/fonts'

interface ShareButtonProps {
  title?: string
  url?: string
  description?: string
}

export default function ShareButton({ 
  title = 'Check out this amazing ramen recipe!',
  url = window?.location?.href || '',
  description = 'Discover delicious ramen recipes and cooking tips'
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')

  const shareOptions = [
    {
      name: 'Facebook',
      icon: '📘',
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
      }
    },
    {
      name: 'Twitter',
      icon: '🐦',
      action: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
      }
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      action: () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank')
      }
    },
    {
      name: 'Email',
      icon: '📧',
      action: () => {
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + url)}`, '_blank')
      }
    }
  ]

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopyStatus('Copied!')
      setTimeout(() => setCopyStatus(''), 2000)
    } catch (err) {
      setCopyStatus('Failed to copy')
      setTimeout(() => setCopyStatus(''), 2000)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-all duration-300 flex items-center gap-2"
      >
        <span>Share</span>
        <span className="text-lg">📤</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Share Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-72 rounded-xl bg-white shadow-xl z-50 overflow-hidden"
            >
              <div className="p-4">
                <h3 className={`${bangersFont.className} text-xl mb-4 text-center`}>
                  Share This Page
                </h3>
                
                {/* Social Share Options */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {shareOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={option.action}
                      className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className="text-xs text-gray-600">{option.name}</span>
                    </button>
                  ))}
                </div>

                {/* Copy Link Section */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                    <input
                      type="text"
                      value={url}
                      readOnly
                      className="flex-1 bg-transparent text-sm text-gray-600 outline-none"
                    />
                    <button
                      onClick={handleCopyLink}
                      className="px-3 py-1 bg-[#2C2C2C] text-white text-sm rounded-md hover:bg-black transition-colors duration-300 min-w-[80px]"
                    >
                      {copyStatus || 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="bg-gray-50 px-4 py-3 text-center">
                <p className="text-sm text-gray-600">
                  Thanks for sharing! 🙏
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 