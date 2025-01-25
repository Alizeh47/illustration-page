'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layout/MainLayout'
import { jollyLodgerFont, bangersFont } from '@/styles/fonts'
import ShareButton from '@/components/ui/ShareButton'

const reviews = [
  {
    id: 1,
    name: 'Sarah Chen',
    location: 'San Francisco, CA',
    rating: 5,
    comment: 'The Tonkotsu recipe was incredible! The detailed instructions made it easy to follow, and the result was restaurant-quality ramen.',
    recipe: 'Classic Tonkotsu',
    image: '/images/tonkotsu.jpg'
  },
  {
    id: 2,
    name: 'James Wilson',
    location: 'London, UK',
    rating: 5,
    comment: 'I never thought I could make authentic ramen at home until I found this guide. The tips about broth preparation were game-changing!',
    recipe: 'Spicy Miso',
    image: '/images/miso.jpg'
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    rating: 5,
    comment: 'As someone who grew up eating ramen, I appreciate how these recipes maintain authenticity while being accessible to home cooks.',
    recipe: 'Shoyu Ramen',
    image: '/images/traditional.jpg'
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

export default function ReviewsPage() {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    rating: 5,
    comment: '',
    recipe: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your review submission logic here
    setShowReviewForm(false)
    setFormData({ name: '', location: '', rating: 5, comment: '', recipe: '' })
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
              Ramen Reviews
            </h1>
            <p className={`${bangersFont.className} text-xl text-gray-600 max-w-2xl mx-auto`}>
              Hear what our community has to say about their ramen-making journey
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={item}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={review.image}
                  alt={review.recipe}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-gray-800">
                    {review.recipe}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className={`${bangersFont.className} text-xl`}>{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add Review Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="px-8 py-3 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-colors duration-300"
          >
            {showReviewForm ? 'Cancel Review' : 'Share Your Experience'}
          </button>
        </div>

        {/* Review Form */}
        {showReviewForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16"
          >
            <h2 className={`${bangersFont.className} text-3xl mb-6 text-center`}>
              Write a Review
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
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="recipe" className="block text-sm font-medium text-gray-700 mb-1">
                  Recipe Tried
                </label>
                <input
                  type="text"
                  id="recipe"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.recipe}
                  onChange={(e) => setFormData({ ...formData, recipe: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <select
                  id="rating"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                >
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating} Star{rating !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Review
                </label>
                <textarea
                  id="comment"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C2C2C] focus:border-transparent transition-all"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-colors duration-300"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Bottom Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-[#2C2C2C] to-black rounded-2xl p-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8">
              <div className="flex flex-col items-center text-center">
                <span className="text-5xl mb-4">⭐</span>
                <h2 className={`${bangersFont.className} text-3xl mb-4`}>
                  Join Our Ramen Community
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl">
                  Share your ramen journey, discover new recipes, and connect with fellow ramen enthusiasts.
                  Your experience could inspire others to start their own culinary adventure!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setShowReviewForm(true)}
                    className="px-6 py-2 bg-[#2C2C2C] text-white rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-105"
                  >
                    Write a Review
                  </button>
                  <button className="px-6 py-2 border-2 border-[#2C2C2C] text-[#2C2C2C] rounded-lg hover:bg-[#2C2C2C] hover:text-white transition-all duration-300 transform hover:scale-105">
                    Browse All Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <ShareButton
          title="Your Title"
          description="Your Description"
          url="Your URL"
        />
      </div>
    </MainLayout>
  )
} 