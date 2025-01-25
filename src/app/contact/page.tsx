'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import { jollyLodgerFont, bangersFont } from '@/styles/fonts'

const contactInfo = [
  {
    title: 'Email Us',
    description: 'Get in touch with our support team',
    icon: '✉️',
    detail: 'support@ramenrecipes.com'
  },
  {
    title: 'Follow Us',
    description: 'Stay updated on social media',
    icon: '🌟',
    detail: '@ramenrecipes'
  },
  {
    title: 'Visit Us',
    description: 'Our cooking studio location',
    icon: '📍',
    detail: 'Tokyo, Japan'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Add your form submission logic here
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#F5EFE6] py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className={`${jollyLodgerFont.className} text-6xl mb-4`}>
              Get in Touch
            </h1>
            <p className={`${bangersFont.className} text-xl text-gray-600 max-w-2xl mx-auto`}>
              We'd love to hear from you! Share your ramen stories and questions
            </p>
          </motion.div>
        </div>

        {/* Contact Info Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className={`${bangersFont.className} text-2xl mb-2`}>{info.title}</h3>
              <p className="text-gray-600 mb-2">{info.description}</p>
              <p className="font-medium text-gray-800">{info.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className={`${bangersFont.className} text-3xl mb-6 text-center`}>
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-8 py-3 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-colors duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Social Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-[#2C2C2C] to-black rounded-2xl p-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className={`${bangersFont.className} text-3xl mb-4`}>
                  Connect With Us
                </h2>
                <p className="text-gray-600">
                  Follow us on social media for daily ramen inspiration, tips, and community highlights
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a href="#" className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gray-50/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                    <span className="text-4xl mb-2">📸</span>
                    <span className={`${bangersFont.className} text-lg`}>Instagram</span>
                    <span className="text-sm text-gray-500">@ramenrecipes</span>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gray-50/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                    <span className="text-4xl mb-2">🐦</span>
                    <span className={`${bangersFont.className} text-lg`}>Twitter</span>
                    <span className="text-sm text-gray-500">@ramenrecipes</span>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gray-50/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                    <span className="text-4xl mb-2">📺</span>
                    <span className={`${bangersFont.className} text-lg`}>YouTube</span>
                    <span className="text-sm text-gray-500">Ramen Recipes</span>
                  </div>
                </a>
                <a href="#" className="group">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-gray-50/50 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                    <span className="text-4xl mb-2">📱</span>
                    <span className={`${bangersFont.className} text-lg`}>TikTok</span>
                    <span className="text-sm text-gray-500">@ramenrecipes</span>
                  </div>
                </a>
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Tag us in your ramen creations using #RamenRecipes
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
} 