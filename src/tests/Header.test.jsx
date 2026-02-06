import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'

vi.mock('../components/Search', () => ({
  default: () => <div data-testid="search-component" />
}))

describe('Header', () => {
  test('renders logo, buttons, and search', () => {
    render(<Header />)

    expect(screen.getByAltText('Charly Gibbons')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /resume/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByTestId('search-component')).toBeInTheDocument()
  })

  test('clicking resume opens the PDF in a new tab', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)

    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: /resume/i }))

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining('Charly_Gibbons_Resume.pdf'),
      '_blank',
      'noopener,noreferrer'
    )

    openSpy.mockRestore()
  })
})
