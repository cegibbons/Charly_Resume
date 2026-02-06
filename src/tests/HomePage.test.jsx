import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'

describe('HomePage', () => {
  test('renders HelloWorld content and pagination', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )

    expect(screen.getByTestId('hello-header')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /page 1/i })).toBeInTheDocument()
  })
})
