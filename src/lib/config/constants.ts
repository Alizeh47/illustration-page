export const ITEMS_PER_PAGE = 9
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

export const CATEGORIES = [
  "Shoyu",
  "Miso",
  "Tonkotsu",
  "Shio",
  "Tsukemen",
  "Vegetarian",
  "Vegan",
] as const

export const DIFFICULTY_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
] as const

export const COOKING_TIMES = [
  "Under 30 minutes",
  "30-60 minutes",
  "1-2 hours",
  "Over 2 hours",
] as const 