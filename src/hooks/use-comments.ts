import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Comment } from '@/types/blog'

export function useComments(recipeId: string) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true)
        setError(null)

        const { data, error } = await supabase
          .from('comments')
          .select(`
            *,
            profiles:author_id (
              username,
              avatar_url
            )
          `)
          .eq('recipe_id', recipeId)
          .order('created_at', { ascending: false })

        if (error) throw error

        setComments(data as Comment[])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching comments')
      } finally {
        setLoading(false)
      }
    }

    fetchComments()
  }, [recipeId])

  const addComment = async (content: string, authorId: string) => {
    try {
      setError(null)

      const { data, error } = await supabase
        .from('comments')
        .insert([
          {
            content,
            author_id: authorId,
            recipe_id: recipeId,
          },
        ])
        .select()

      if (error) throw error

      setComments(prev => [data[0] as Comment, ...prev])
      return { success: true }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred while adding comment'
      setError(message)
      return { success: false, error: message }
    }
  }

  const deleteComment = async (commentId: string, authorId: string) => {
    try {
      setError(null)

      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId)
        .eq('author_id', authorId)

      if (error) throw error

      setComments(prev => prev.filter(comment => comment.id !== commentId))
      return { success: true }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred while deleting comment'
      setError(message)
      return { success: false, error: message }
    }
  }

  return {
    comments,
    loading,
    error,
    addComment,
    deleteComment,
  }
} 