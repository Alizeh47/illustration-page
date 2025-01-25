'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Ramen Munching. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="/privacy" className="text-sm text-gray-600 hover:text-primary-500">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-primary-500">Terms of Service</a>
            <a href="/contact" className="text-sm text-gray-600 hover:text-primary-500">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 