'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import { jollyLodgerFont, bangersFont } from '@/styles/fonts'

const guideSteps = [
  {
    id: 1,
    title: 'Choose Your Broth',
    description: 'The foundation of any great ramen bowl starts with the broth',
    tips: [
      'Tonkotsu: Rich and creamy pork bone broth',
      'Shoyu: Light soy sauce-based broth',
      'Miso: Hearty fermented soybean paste broth'
    ],
    image: '/images/traditional.jpg'
  },
  {
    id: 2,
    title: 'Select Your Noodles',
    description: 'Different styles of ramen call for different noodle types',
    tips: [
      'Thin and straight for lighter broths',
      'Thick and wavy for rich broths',
      'Fresh noodles are always best'
    ],
    image: '/images/collection.jpg'
  },
  {
    id: 3,
    title: 'Add Your Toppings',
    description: 'Customize your bowl with traditional toppings',
    tips: [
      'Chashu (braised pork belly)',
      'Ajitsuke Tamago (marinated egg)',
      'Nori (dried seaweed)'
    ],
    image: '/images/vegan.jpg'
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export default function GuidePage() {
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
              Ramen Making Guide
            </h1>
            <p className={`${bangersFont.className} text-xl text-gray-600 max-w-2xl mx-auto`}>
              Master the art of crafting the perfect bowl of ramen
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

        {/* Guide Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto space-y-16"
        >
          {guideSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={item}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className={`${bangersFont.className} text-4xl`}>
                  {step.id}. {step.title}
                </h2>
                <p className="text-gray-600 text-lg">{step.description}</p>
                <ul className="space-y-3">
                  {step.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-2xl mr-3">🍜</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pro Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8"
        >
          <h2 className={`${bangersFont.className} text-3xl mb-6 text-center`}>Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className={`${bangersFont.className} text-xl`}>Temperature Matters</h3>
              <p className="text-gray-600">
                Serve your ramen hot! The noodles continue to cook in the broth, so timing is crucial
                for the perfect texture.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className={`${bangersFont.className} text-xl`}>Prep is Key</h3>
              <p className="text-gray-600">
                Have all your toppings ready before assembling. A well-organized workspace makes
                for a better ramen experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-[#2C2C2C] to-black rounded-2xl p-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-gray-50/50">
                  <span className="text-4xl mb-4 block">🕒</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Timing is Everything</h3>
                  <p className="text-gray-600">Cook noodles exactly according to package instructions for perfect texture</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-50/50">
                  <span className="text-4xl mb-4 block">🌡️</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Temperature Control</h3>
                  <p className="text-gray-600">Keep your broth hot and your toppings ready before adding noodles</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-gray-50/50">
                  <span className="text-4xl mb-4 block">📝</span>
                  <h3 className={`${bangersFont.className} text-xl mb-2`}>Mise en Place</h3>
                  <p className="text-gray-600">Prepare and organize all ingredients before you start cooking</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-105">
                  Download Complete Guide
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
} 