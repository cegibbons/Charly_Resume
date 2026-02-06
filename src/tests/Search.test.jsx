import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Search from '../components/Search'

describe('Search', () => {
  test('renders the search icon', () => {
    render(<Search />)
    expect(screen.getByTestId('search-icon')).toBeInTheDocument()
  })

  test('clicking the icon shows the input and hides the icon', () => {
    render(<Search />)

    fireEvent.click(screen.getByTestId('search-icon'))

    expect(screen.getByTestId('search-input')).toBeInTheDocument()
    expect(screen.queryByTestId('search-icon')).not.toBeInTheDocument()
  })

  test('search button triggers alert and closes input', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

    render(<Search />)
    fireEvent.click(screen.getByTestId('search-icon'))

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'react' }
    })
    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(alertSpy).toHaveBeenCalledWith('Searching for: react')
    expect(screen.queryByTestId('search-input')).not.toBeInTheDocument()
    expect(screen.getByTestId('search-icon')).toBeInTheDocument()

    alertSpy.mockRestore()
  })
})
