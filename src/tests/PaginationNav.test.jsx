import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom'
import PaginationNav from '../components/PaginationNav'

const LocationDisplay = () => {
  const location = useLocation()
  return <div data-testid="location">{location.pathname}</div>
}

describe('PaginationNav', () => {
  test('shows current page based on route', () => {
    render(
      <MemoryRouter initialEntries={['/resume']}>
        <PaginationNav />
      </MemoryRouter>
    )

    const current = screen.getByRole('button', { name: /page 2/i })
    expect(current).toHaveAttribute('aria-current', 'page')
  })

  test('navigates to selected page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <PaginationNav />
        <Routes>
          <Route path="/" element={<LocationDisplay />} />
          <Route path="/resume" element={<LocationDisplay />} />
          <Route path="/about" element={<LocationDisplay />} />
        </Routes>
      </MemoryRouter>
    )

    fireEvent.click(screen.getByRole('button', { name: /page 3/i }))
    expect(screen.getByTestId('location')).toHaveTextContent('/about')
  })
})
