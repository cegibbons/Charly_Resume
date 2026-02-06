import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../components/Header'

vi.mock('../components/Search', () => ({
  default: () => <div data-testid="search-component" />
}))

describe('Header', () => {
  test('renders logo, buttons, and search', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByAltText('Charly Gibbons')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByTestId('search-component')).toBeInTheDocument()
  })

  test('resume link routes to /resume', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const resumeLink = screen.getByRole('link', { name: /resume/i })
    expect(resumeLink).toHaveAttribute('href', '/resume')
  })

  test('about link routes to /about', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const aboutLink = screen.getByRole('link', { name: /about/i })
    expect(aboutLink).toHaveAttribute('href', '/about')
  })
})
