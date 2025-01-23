import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { PostCard } from '../post-card'

const mockPost = {
  id: '1',
  title: 'Test Post',
  content: 'Test content for the post',
  author_id: 'author-1',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  published: true,
  slug: 'test-post',
}

describe('PostCard', () => {
  it('renders post title and content', () => {
    render(<PostCard post={mockPost} />)
    
    expect(screen.getByText(mockPost.title)).toBeInTheDocument()
    expect(screen.getByText(mockPost.content)).toBeInTheDocument()
  })

  it('shows draft badge when post is not published', () => {
    const unpublishedPost = { ...mockPost, published: false }
    render(<PostCard post={unpublishedPost} />)
    
    expect(screen.getByText('Draft')).toBeInTheDocument()
  })

  it('does not show draft badge when post is published', () => {
    render(<PostCard post={mockPost} />)
    
    expect(screen.queryByText('Draft')).not.toBeInTheDocument()
  })

  it('renders image when image_url is provided', () => {
    const postWithImage = { ...mockPost, image_url: 'https://example.com/image.jpg' }
    render(<PostCard post={postWithImage} />)
    
    const image = screen.getByAltText(postWithImage.title)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', postWithImage.image_url)
  })
}) 