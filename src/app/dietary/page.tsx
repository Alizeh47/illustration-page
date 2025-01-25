'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import { jollyLodgerFont, bangersFont } from '@/styles/fonts'

const dietaryOptions = [
  {
    id: 1,
    title: 'Vegetarian Ramen',
    description: 'Plant-based broths and toppings that pack umami flavor',
    recommendations: ['Mushroom-based broth', 'Soy-marinated eggs', 'Bamboo shoots'],
    image: '/images/vegan.jpg',
    color: 'from-green-500/80 to-green-900/80'
  },
  {
    id: 2,
    title: 'Gluten-Free',
    description: 'Specially crafted noodles and gluten-free ingredients',
    recommendations: ['Rice noodles', 'Tamari sauce', 'Corn-based proteins'],
    image: '/images/traditional.jpg',
    color: 'from-blue-500/80 to-blue-900/80'
  },
  {
    id: 3,
    title: 'Low-Calorie',
    description: 'Lighter options without compromising on taste',
    recommendations: ['Clear broths', 'Lean proteins', 'Extra vegetables'],
    image: '/images/collection.jpg',
    color: 'from-purple-500/80 to-purple-900/80'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function DietaryPage() {
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
              Dietary Suggestions
            </h1>
            <p className={`${bangersFont.className} text-xl text-gray-600 max-w-2xl mx-auto`}>
              Ramen for every lifestyle and dietary preference
            </p>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto mb-16"
        >
          <div className="relative h-[300px]">
            <Image
              src="/images/ramen.png"
              alt="Ramen Illustration"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Dietary Options Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {dietaryOptions.map((option) => (
            <motion.div
              key={option.id}
              variants={item}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color}`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className={`${bangersFont.className} text-3xl text-white text-center px-4`}>
                    {option.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{option.description}</p>
                <h4 className={`${bangersFont.className} text-xl mb-2`}>Recommended Options:</h4>
                <ul className="space-y-2">
                  {option.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nutritional Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className={`${bangersFont.className} text-3xl mb-6 text-center`}>
            General Nutrition Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className={`${bangersFont.className} text-xl`}>Portion Control</h3>
              <p className="text-gray-600">
                Customize your portion sizes based on your dietary needs. Our recipes can be easily
                adjusted to meet your caloric requirements.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className={`${bangersFont.className} text-xl`}>Ingredient Substitutions</h3>
              <p className="text-gray-600">
                Most ingredients can be substituted to accommodate dietary restrictions while
                maintaining the authentic ramen experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-[#2C2C2C] to-black rounded-2xl p-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h2 className={`${bangersFont.className} text-3xl mb-4`}>
                    Get Weekly Recipe Updates
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Subscribe to receive new dietary-friendly recipes, cooking tips, and exclusive content
                    delivered straight to your inbox.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🥗</span>
                      <span className="text-sm">Vegetarian Options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🌾</span>
                      <span className="text-sm">Gluten-Free Recipes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📊</span>
                      <span className="text-sm">Nutrition Facts</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex-1 px-6 py-3 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-105">
                      Subscribe Now
                    </button>
                    <button className="flex-1 px-6 py-3 border-2 border-[#2C2C2C] text-[#2C2C2C] rounded-lg hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 transform hover:scale-105">
                      View Sample
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center md:text-left">
                    By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
} 