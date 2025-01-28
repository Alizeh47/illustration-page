'use client'

import React from 'react'
import { RecipeCard } from './RecipeCard'
import { useGlobalContext } from '@/context/GlobalContext'
import { jollyLodgerFont } from '../../styles/fonts'

// Sample data - in a real app, this would come from an API or database
const recipes = [
  {
    id: 1,
    title: 'Classic Tonkotsu Ramen',
    description: 'Rich and creamy pork bone broth with tender chashu',
    image: '/images/tonkotsu.jpg',
    category: 'traditional'
  },
  {
    id: 2,
    title: 'Spicy Miso Ramen',
    description: 'Warming miso-based broth with a spicy kick',
    image: '/images/miso.jpg',
    category: 'traditional'
  },
  {
    id: 3,
    title: 'Vegan Shoyu Ramen',
    description: 'Plant-based take on the classic shoyu ramen',
    image: '/images/vegan.jpg',
    category: 'modern'
  }
]

export const RecipeGrid: React.FC = () => {
  const { currentCategory } = useGlobalContext()
  
  const filteredRecipes = currentCategory === 'all'
    ? recipes
    : recipes.filter(recipe => recipe.category === currentCategory)

  return (
    <div>
      <h1 className="text-right pr-24 mb-6 text-5xl font-bold">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            category={recipe.category}
          />
        ))}
      </div>
      <h1 className={`absolute top-12 left-1/2 -translate-x-1/2 text-[48px] tracking-wider text-center ${jollyLodgerFont.className}`}>
        MISO<br />RAMEN
      </h1>
    </div>
  )
} 