'use client'

import React from 'react'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import ShareButton from '@/components/ui/ShareButton'
import { jollyLodgerFont, bangersFont } from '@/styles/fonts'

const shareExamples = [
  {
    title: 'Classic Tonkotsu Recipe',
    description: 'Master the art of making rich and creamy Tonkotsu ramen at home with our detailed recipe guide.',
    type: 'Recipe'
  },
  {
    title: 'Vegan Ramen Guide',
    description: 'Discover how to make delicious plant-based ramen that doesn\'t compromise on flavor.',
    type: 'Guide'
  },
  {
    title: 'Ramen Making Tips',
    description: 'Essential tips and tricks for making restaurant-quality ramen in your own kitchen.',
    type: 'Tips'
  }
]

export default function SharePage() {
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
              Share Your Ramen Journey
            </h1>
            <p className={`${bangersFont.className} text-xl text-gray-600 max-w-2xl mx-auto`}>
              Spread the love for ramen with your friends and family
            </p>
          </motion.div>
        </div>

        {/* Share Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {shareExamples.map((example, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#2C2C2C] text-white text-sm rounded-full mb-2">
                    {example.type}
                  </span>
                  <h2 className={`${bangersFont.className} text-2xl mb-2`}>{example.title}</h2>
                  <p className="text-gray-600">{example.description}</p>
                </div>
                <ShareButton
                  title={example.title}
                  description={example.description}
                  url={`https://ramenrecipes.com/${example.type.toLowerCase()}/${example.title.toLowerCase().replace(/\s+/g, '-')}`}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-[#2C2C2C] to-black rounded-2xl p-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className={`${bangersFont.className} text-3xl mb-4`}>
                  Why Share?
                </h2>
                <p className="text-gray-600">
                  Help others discover the joy of making authentic ramen at home
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-gray-50/50">
                  <span className="text-4xl mb-4 block">🌟</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Inspire Others</h3>
                  <p className="text-gray-600">Share your favorite recipes and inspire others to start their ramen journey</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-50/50">
                  <span className="text-4xl mb-4 block">🤝</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Build Community</h3>
                  <p className="text-gray-600">Connect with fellow ramen enthusiasts and share your experiences</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-50/50">
                  <span className="text-4xl mb-4 block">📱</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Easy Sharing</h3>
                  <p className="text-gray-600">Multiple sharing options make it easy to spread the word</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
} 