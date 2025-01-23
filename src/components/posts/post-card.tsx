"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/types/content'
import { formatDistanceToNow } from 'date-fns'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.image_url && (
        <div className="relative h-48 w-full">
          <Image
            src={post.image_url}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <Link href={`/posts/${post.slug}`}>
          <h2 className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="mt-2 text-gray-600 line-clamp-3">
          {post.content}
        </p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <time dateTime={post.created_at}>
            {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
          </time>
          {!post.published && (
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Draft
            </span>
          )}
        </div>
      </div>
    </div>
  )
} 