'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Recipe } from '@/types/recipe'

export interface RecipeCardProps {
  title: string
  description: string
  image: string
  category: string
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, image, category }) => {
  return (
    <Link href={`/recipes/${category}/${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
} 