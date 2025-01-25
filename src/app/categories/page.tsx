'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import { jollyLodgerFont, bangersFont } from '@/styles/fonts'

const categories = [
  {
    id: 1,
    name: 'Traditional',
    description: 'Time-honored recipes passed down through generations',
    image: '/images/traditional.jpg',
    count: 12,
    color: 'from-red-500/80 to-red-900/80'
  },
  {
    id: 2,
    name: 'Modern Fusion',
    description: 'Contemporary takes on classic ramen styles',
    image: '/images/fusion.jpg',
    count: 8,
    color: 'from-blue-500/80 to-blue-900/80'
  },
  {
    id: 3,
    name: 'Vegan & Vegetarian',
    description: 'Plant-based bowls full of flavor',
    image: '/images/vegan.jpg',
    count: 6,
    color: 'from-green-500/80 to-green-900/80'
  },
  {
    id: 4,
    name: 'Spicy',
    description: 'For those who love an extra kick',
    image: '/images/spicy.jpg',
    count: 5,
    color: 'from-orange-500/80 to-orange-900/80'
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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
}

export default function CategoriesPage() {
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
              Explore Ramen Categories
            </h1>
            <p className={`${bangersFont.className} text-xl text-gray-600 max-w-2xl mx-auto`}>
              Find your perfect bowl from our diverse collection of ramen styles
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
          <div className="relative h-[400px]">
            <Image
              src="/images/ramen.png"
              alt="Noodles Illustration"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <Link href={`/categories/${category.id}`}>
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className={`${bangersFont.className} text-3xl mb-2`}>{category.name}</h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {category.count} Recipes
                    </span>
                    <span className="text-sm font-medium">View All →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Exploration Section */}
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
                  Discover More Flavors
                </h2>
                <p className="text-gray-600">
                  Explore our curated collections and find your next favorite ramen style
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-300 cursor-pointer group">
                  <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🌶️</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Spice Level</h3>
                  <p className="text-sm text-gray-600">From mild to extreme heat</p>
                  <span className="inline-block mt-3 text-[#2C2C2C] font-medium">6 Variations →</span>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-300 cursor-pointer group">
                  <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🥄</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Broth Type</h3>
                  <p className="text-sm text-gray-600">Light to rich broths</p>
                  <span className="inline-block mt-3 text-[#2C2C2C] font-medium">8 Styles →</span>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-300 cursor-pointer group">
                  <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🌿</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Toppings</h3>
                  <p className="text-sm text-gray-600">Traditional to creative</p>
                  <span className="inline-block mt-3 text-[#2C2C2C] font-medium">12 Options →</span>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 transition-all duration-300 cursor-pointer group">
                  <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">🍜</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Noodle Types</h3>
                  <p className="text-sm text-gray-600">Find your perfect match</p>
                  <span className="inline-block mt-3 text-[#2C2C2C] font-medium">5 Types →</span>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-105">
                  Explore All Categories
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
} 