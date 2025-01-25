import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../Header'

// Mock usePathname hook
jest.mock('next/navigation', () => ({
  usePathname() {
    return '/'
  }
}))

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(<Header />)
    
    // Check logo
    expect(screen.getByText('Ramen Munching')).toBeInTheDocument()
    
    // Check navigation links
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Recipes')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('applies active link styles to current path', () => {
    render(<Header />)
    
    const homeLink = screen.getByText('Home')
    expect(homeLink.className).toContain('text-primary-500')
    
    const recipesLink = screen.getByText('Recipes')
    expect(recipesLink.className).toContain('text-gray-600')
  })
}) 