'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useGlobalContext } from '@/context/GlobalContext'

const categories = [
  {
    id: 'traditional',
    name: 'Traditional',
    description: 'Classic ramen recipes passed down through generations',
    image: '/images/placeholder-traditional.jpg',
  },
  {
    id: 'modern',
    name: 'Modern Fusion',
    description: 'Contemporary takes on classic ramen dishes',
    image: '/images/placeholder-modern.jpg',
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian',
    description: 'Plant-based ramen recipes full of flavor',
    image: '/images/placeholder-vegetarian.jpg',
  },
  {
    id: 'spicy',
    name: 'Spicy',
    description: 'Hot and flavorful ramen variations',
    image: '/images/placeholder-spicy.jpg',
  }
]

const CategoryGrid: React.FC = () => {
  const { setCurrentCategory } = useGlobalContext()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/recipes?category=${category.id}`}
          onClick={() => setCurrentCategory(category.id)}
          className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48 w-full bg-gray-200">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/placeholder-category.jpg';
              }}
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{category.name}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryGrid 