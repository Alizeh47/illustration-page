"use client"

import { useState } from 'react'
import { useAuth } from '@/components/auth/auth-provider'
import { supabase } from '@/lib/supabase/client'

interface CommentFormProps {
  postId: string
  parentId?: string
  onSuccess?: () => void
}

export function CommentForm({ postId, parentId, onSuccess }: CommentFormProps) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setLoading(true)
    try {
      const { error } = await supabase
        .from('comments')
        .insert({
          content,
          post_id: postId,
          author_id: user.id,
          parent_id: parentId,
        })

      if (error) throw error
      
      setContent('')
      onSuccess?.()
    } catch (error) {
      console.error('Error submitting comment:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!user) {
    return null
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        required
        rows={3}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? 'Posting...' : 'Post Comment'}
        </button>
      </div>
    </form>
  )
} 