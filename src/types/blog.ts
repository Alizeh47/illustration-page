import { CATEGORIES, DIFFICULTY_LEVELS, COOKING_TIMES } from '@/lib/config/constants'

export type Category = typeof CATEGORIES[number]
export type DifficultyLevel = typeof DIFFICULTY_LEVELS[number]
export type CookingTime = typeof COOKING_TIMES[number]

export interface Recipe {
  id: string
  title: string
  slug: string
  content: string
  imageUrl: string | null
  category: Category
  difficulty: DifficultyLevel
  cookingTime: CookingTime
  ingredients: string[]
  instructions: string[]
  authorId: string
  createdAt: string
  updatedAt: string
}

export interface Comment {
  id: string
  content: string
  authorId: string
  recipeId: string
  createdAt: string
  updatedAt: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  imageUrl: string | null
  authorId: string
  category: 'culture' | 'nutrition'
  createdAt: string
  updatedAt: string
} 