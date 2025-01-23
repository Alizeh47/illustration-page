import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Recipe, BlogPost } from '@/types/blog'
import type { PaginatedResponse, SearchParams } from '@/types/api'

type PostType = 'recipes' | 'culture' | 'nutrition'

export function usePosts<T extends Recipe | BlogPost>(
  type: PostType,
  params: SearchParams = {}
) {
  const [data, setData] = useState<PaginatedResponse<T>>({
    data: [],
    metadata: {
      currentPage: 1,
      totalPages: 0,
      totalItems: 0,
      itemsPerPage: 9,
    },
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)

        const {
          query = '',
          category = '',
          page = 1,
          limit = 9,
          sortBy = 'latest',
          order = 'desc',
        } = params

        let query_ = supabase
          .from(type)
          .select('*', { count: 'exact' })

        // Apply filters
        if (query) {
          query_ = query_.ilike('title', `%${query}%`)
        }
        if (category) {
          query_ = query_.eq('category', category)
        }

        // Apply sorting
        const orderColumn = sortBy === 'latest' ? 'created_at' : sortBy
        query_ = query_.order(orderColumn, { ascending: order === 'asc' })

        // Apply pagination
        const from = (page - 1) * limit
        const to = from + limit - 1
        query_ = query_.range(from, to)

        const { data: posts, count, error } = await query_

        if (error) throw error

        setData({
          data: posts as T[],
          metadata: {
            currentPage: page,
            totalPages: Math.ceil((count || 0) / limit),
            totalItems: count || 0,
            itemsPerPage: limit,
          },
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [type, params])

  return { ...data, loading, error }
} 