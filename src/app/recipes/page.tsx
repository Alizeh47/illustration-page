'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import { jollyLodgerFont, bangersFont } from '@/styles/fonts'

const recipes = [
  {
    id: 1,
    title: 'Classic Tonkotsu',
    description: 'Rich and creamy pork bone broth with tender chashu',
    image: '/images/tonkotsu.jpg',
    category: 'Traditional',
    prepTime: '30 mins',
    cookTime: '4 hrs'
  },
  {
    id: 2,
    title: 'Spicy Miso',
    description: 'Warming miso-based broth with a spicy kick',
    image: '/images/miso.jpg',
    category: 'Modern',
    prepTime: '25 mins',
    cookTime: '2 hrs'
  },
  {
    id: 3,
    title: 'Vegan Shoyu',
    description: 'Plant-based take on the classic shoyu ramen',
    image: '/images/vegan.jpg',
    category: 'Vegan',
    prepTime: '20 mins',
    cookTime: '1.5 hrs'
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

export default function RecipesPage() {
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
              Our Ramen Collection
            </h1>
            <p className={`${bangersFont.className} text-xl text-gray-600 max-w-2xl mx-auto`}>
              Discover our carefully crafted ramen recipes, from traditional favorites to modern interpretations
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

        {/* Recipe Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              variants={item}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-800">
                    {recipe.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${bangersFont.className} text-2xl mb-2`}>{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Prep: {recipe.prepTime}</span>
                  <span>Cook: {recipe.cookTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recipe Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-[#2C2C2C] to-black rounded-2xl p-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className={`${bangersFont.className} text-3xl mb-4`}>
                  Find Your Perfect Bowl
                </h2>
                <p className="text-gray-600">
                  Explore our recipe collection by cooking time, difficulty level, or dietary preferences
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Cooking Time</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all">
                    <option>Under 30 mins</option>
                    <option>30-60 mins</option>
                    <option>Over 60 mins</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Dietary</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all">
                    <option>All</option>
                    <option>Vegetarian</option>
                    <option>Gluten-Free</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-105">
                  Search Recipes
                </button>
                <button className="px-6 py-3 border-2 border-[#2C2C2C] text-[#2C2C2C] rounded-lg hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 transform hover:scale-105">
                  Clear Filters
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👨‍🍳</span>
                  <span className="text-sm text-gray-600">20+ Recipes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-sm text-gray-600">4.8 Avg Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  <span className="text-sm text-gray-600">Top-Rated Collection</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
} 