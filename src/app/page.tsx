'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layout/MainLayout'
import { RecipeCard } from '@/components/ui/RecipeCard'
import { jollyLodgerFont } from '@/styles/fonts'

const featuredRecipes = [
  {
    id: 1,
    title: 'Tonkotsu Ramen',
    description: 'Rich and creamy pork bone broth with tender chashu',
    image: '/images/placeholder-tonkotsu.jpg',
    category: 'traditional'
  },
  {
    id: 2,
    title: 'Spicy Miso Ramen',
    description: 'Warming miso-based broth with a spicy kick',
    image: '/images/placeholder-miso.jpg',
    category: 'spicy'
  }
]

const HomePage = () => {
  return (
    <MainLayout>
      <div className="flex-1 grid grid-cols-12 gap-8 relative text-[48px] text-[#000000]">
        {/* Left section - Ingredients */}
        <div className="col-span-4 p-12 space-y-8">
          <div>
            <h3 className={`mb-4 ${jollyLodgerFont.className} text-[48px]`}>Ingredients</h3>
            <p className="leading-relaxed">
              Chicken broth, white miso paste, soy sauce, sesame oil, garlic, ginger, ramen noodles, roasted chicken, pork, soft-boiled eggs, green onions, nori.
            </p>
            <p className="mt-4">
              ** Highlighted food ingredients can cause allergic reactions
            </p>
          </div>

          <div>
            <h3 className={`mb-4 ${jollyLodgerFont.className} text-[48px]`}>Nutritional Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="border border-[#2C2C2C]/20 p-6 rounded-lg hover:shadow-xl transition-all duration-500 hover:border-[#2C2C2C]/40 bg-white/50 backdrop-blur-sm group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex justify-between items-center">
                  <div className="text-base uppercase tracking-wider text-[#2C2C2C]/60">CALORIES</div>
                  <div className="text-3xl font-medium">870</div>
                  <div className="text-sm text-[#2C2C2C]/40 italic">PER 285g</div>
                </div>
              </div>
              <div className="border border-[#2C2C2C]/20 p-6 rounded-lg hover:shadow-xl transition-all duration-500 hover:border-[#2C2C2C]/40 bg-white/50 backdrop-blur-sm group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex justify-between items-center">
                  <div className="text-base uppercase tracking-wider text-[#2C2C2C]/60">PROTEIN</div>
                  <div className="text-3xl font-medium">19g</div>
                </div>
              </div>
              <div className="border border-[#2C2C2C]/20 p-6 rounded-lg hover:shadow-xl transition-all duration-500 hover:border-[#2C2C2C]/40 bg-white/50 backdrop-blur-sm group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex justify-between items-center">
                  <div className="text-base uppercase tracking-wider text-[#2C2C2C]/60">FAT</div>
                  <div className="text-3xl font-medium">15g</div>
                </div>
              </div>
              <div className="border border-[#2C2C2C]/20 p-6 rounded-lg hover:shadow-xl transition-all duration-500 hover:border-[#2C2C2C]/40 bg-white/50 backdrop-blur-sm group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="flex justify-between items-center">
                  <div className="text-base uppercase tracking-wider text-[#2C2C2C]/60">CARBS</div>
                  <div className="text-3xl font-medium">71g</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center section - Ramen Illustration */}
        <div className="col-span-8 flex flex-col items-center justify-center p-12 relative">
          <h1 className={`absolute top-12 left-1/2 -translate-x-1/2 text-[72px] tracking-wider text-center ${jollyLodgerFont.className}`}>
            MISO<br />RAMEN
          </h1>
          <div className="text-center max-w-md mt-36">
            <p className="mb-8">
              Embark on a culinary journey to Japan with our savory Miso Ramen, a steaming bowl of pure comfort and flavor.
            </p>
            <div className="relative w-[500px] h-[500px]">
              <Image
                src="/images/ramen-illustration.png"
                alt="Miso Ramen Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-3 right-0 flex items-center space-x-12">
            <span className="text-[24px] font-bold">$16.50</span>
            <button className="bg-[#2C2C2C] text-white px-6 py-2 text-[20px]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage
