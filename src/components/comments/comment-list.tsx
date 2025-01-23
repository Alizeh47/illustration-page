"use client"

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Comment, Author } from '@/types/content'
import { CommentForm } from './comment-form'
import { formatDistanceToNow } from 'date-fns'

interface CommentListProps {
  postId: string
}

interface CommentItemProps {
  comment: Comment & { author: Author }
  postId: string
  onReplySuccess: () => void
}

function CommentItem({ comment, postId, onReplySuccess }: CommentItemProps) {
  const [showReplyForm, setShowReplyForm] = useState(false)

  return (
    <div className="py-4">
      <div className="flex space-x-3">
        {comment.author.avatar_url && (
          <img
            src={comment.author.avatar_url}
            alt={comment.author.name}
            className="h-8 w-8 rounded-full"
          />
        )}
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h4 className="text-sm font-medium text-gray-900">{comment.author.name}</h4>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-700">{comment.content}</p>
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="mt-2 text-sm text-indigo-600 hover:text-indigo-500"
          >
            Reply
          </button>
          {showReplyForm && (
            <div className="mt-4 ml-4">
              <CommentForm
                postId={postId}
                parentId={comment.id}
                onSuccess={() => {
                  setShowReplyForm(false)
                  onReplySuccess()
                }}
              />
            </div>
          )}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 ml-4 border-l-2 border-gray-200 pl-4">
              {comment.replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply as Comment & { author: Author }}
                  postId={postId}
                  onReplySuccess={onReplySuccess}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function CommentList({ postId }: CommentListProps) {
  const [comments, setComments] = useState<(Comment & { author: Author })[]>([])
  const [loading, setLoading] = useState(true)

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select(`
          *,
          author:author_id (
            id,
            name,
            avatar_url
          )
        `)
        .eq('post_id', postId)
        .is('parent_id', null)
        .order('created_at', { ascending: true })

      if (error) throw error

      // Fetch replies for each comment
      const commentsWithReplies = await Promise.all(
        data.map(async (comment) => {
          const { data: replies, error: repliesError } = await supabase
            .from('comments')
            .select(`
              *,
              author:author_id (
                id,
                name,
                avatar_url
              )
            `)
            .eq('parent_id', comment.id)
            .order('created_at', { ascending: true })

          if (repliesError) throw repliesError

          return {
            ...comment,
            replies,
          }
        })
      )

      setComments(commentsWithReplies)
    } catch (error) {
      console.error('Error fetching comments:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [postId])

  if (loading) {
    return (
      <div className="flex justify-center py-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <CommentForm postId={postId} onSuccess={fetchComments} />
      <div className="divide-y divide-gray-200">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            postId={postId}
            onReplySuccess={fetchComments}
          />
        ))}
      </div>
    </div>
  )
} 