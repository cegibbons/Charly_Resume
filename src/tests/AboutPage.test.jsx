import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'

describe('AboutPage', () => {
  test('renders hello world text and pagination', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    )

    expect(screen.getByText('Coming Soon!')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /page 1/i })).toBeInTheDocument()
  })
})
