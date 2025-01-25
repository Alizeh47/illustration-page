'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import { jollyLodgerFont, bangersFont } from '@/styles/fonts'

const features = [
  {
    id: 1,
    title: 'Authentic Recipes',
    description: 'Carefully curated recipes that stay true to traditional Japanese ramen-making techniques',
    icon: '🍜'
  },
  {
    id: 2,
    title: 'Modern Twists',
    description: 'Creative interpretations that blend classic flavors with contemporary ingredients',
    icon: '🌟'
  },
  {
    id: 3,
    title: 'Detailed Instructions',
    description: 'Step-by-step guides to help you create the perfect bowl of ramen at home',
    icon: '📝'
  },
  {
    id: 4,
    title: 'Community Driven',
    description: 'Join our community of ramen enthusiasts and share your culinary journey',
    icon: '👥'
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

export default function AboutPage() {
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
              Our Ramen Story
            </h1>
            <p className={`${bangersFont.className} text-xl text-gray-600 max-w-2xl mx-auto`}>
              Bringing the art of ramen making to your kitchen
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className={`${bangersFont.className} text-4xl mb-4`}>
                Passion for Perfect Ramen
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our journey began with a simple love for authentic Japanese ramen. We believe that 
                everyone should be able to create restaurant-quality ramen in their own kitchen. 
                Through careful research and collaboration with experienced ramen chefs, we've 
                developed a collection of recipes that balance authenticity with accessibility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a beginner or an experienced cook, our detailed recipes and guides 
                will help you master the art of ramen making. From rich, creamy tonkotsu to light, 
                refreshing shoyu, we've got something for every palate.
              </p>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/collection.jpg"
                alt="Ramen Making Process"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={item}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`${bangersFont.className} text-2xl mb-2`}>{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Community Highlights Section */}
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
                    Join Our Growing Community
                  </h2>
                  <p className="text-gray-600">
                    Be part of a passionate community of ramen enthusiasts from around the world
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">10K+</div>
                    <div className={`${bangersFont.className} text-xl mb-2`}>Community Members</div>
                    <p className="text-sm text-gray-600">Active ramen enthusiasts</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className={`${bangersFont.className} text-xl mb-2`}>Recipe Contributions</div>
                    <p className="text-sm text-gray-600">From home chefs worldwide</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className={`${bangersFont.className} text-xl mb-2`}>Countries</div>
                    <p className="text-sm text-gray-600">Global ramen community</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50/50 rounded-xl p-6">
                    <h3 className={`${bangersFont.className} text-2xl mb-4`}>Get Involved</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="text-xl">🎯</span>
                        <span>Share your ramen creations</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-xl">💬</span>
                        <span>Join recipe discussions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-xl">🤝</span>
                        <span>Connect with fellow enthusiasts</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50/50 rounded-xl p-6">
                    <h3 className={`${bangersFont.className} text-2xl mb-4`}>Upcoming Events</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="text-xl">📺</span>
                        <span>Live cooking workshops</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-xl">🏆</span>
                        <span>Recipe competitions</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-xl">🎓</span>
                        <span>Masterclass sessions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <button className="px-8 py-3 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-105">
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
} 