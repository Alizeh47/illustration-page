export type Post = {
  id: string
  title: string
  content: string
  image_url?: string
  author_id: string
  created_at: string
  updated_at: string
  published: boolean
  slug: string
}

export type Comment = {
  id: string
  content: string
  post_id: string
  author_id: string
  created_at: string
  updated_at: string
  parent_id?: string
  replies?: Comment[]
}

export type Author = {
  id: string
  name: string
  avatar_url?: string
} 