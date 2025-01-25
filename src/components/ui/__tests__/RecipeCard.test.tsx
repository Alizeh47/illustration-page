import React from 'react'
import { render, screen } from '@testing-library/react'
import { RecipeCard } from '../RecipeCard'

describe('RecipeCard', () => {
  it('renders recipe information correctly', () => {
    render(
      <RecipeCard
        title="Miso Ramen"
        description="Classic Japanese ramen"
        image="/images/miso-ramen.jpg"
        category="Traditional"
      />
    )
    
    expect(screen.getByText('Miso Ramen')).toBeInTheDocument()
    expect(screen.getByText('Classic Japanese ramen')).toBeInTheDocument()
    expect(screen.getByText('Traditional')).toBeInTheDocument()
    expect(screen.getByAltText('Miso Ramen')).toBeInTheDocument()
  })
}) 