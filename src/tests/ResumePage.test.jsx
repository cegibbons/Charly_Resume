import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ResumePage from '../pages/ResumePage'

describe('ResumePage', () => {
  test('renders the resume iframe and pagination', () => {
    render(
      <MemoryRouter>
        <ResumePage />
      </MemoryRouter>
    )

    expect(screen.getByTitle('Resume PDF')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /page 1/i })).toBeInTheDocument()
  })
})
