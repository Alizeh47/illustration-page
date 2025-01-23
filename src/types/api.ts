export type ApiResponse<T> = {
  data: T | null
  error: string | null
}

export type PaginatedResponse<T> = {
  data: T[]
  metadata: {
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
  }
}

export type ApiError = {
  message: string
  code?: string
  status?: number
}

export type SearchParams = {
  query?: string
  category?: string
  page?: number
  limit?: number
  sortBy?: 'latest' | 'popular' | 'title'
  order?: 'asc' | 'desc'
} 