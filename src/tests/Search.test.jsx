import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Search from '../components/Search'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

describe('Search', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  test('renders the search icon', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )
    expect(screen.getByTestId('search-icon')).toBeInTheDocument()
  })

  test('clicking the icon shows the input and hides the icon', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByTestId('search-icon'))

    expect(screen.getByTestId('search-input')).toBeInTheDocument()
    expect(screen.queryByTestId('search-icon')).not.toBeInTheDocument()
  })

  test('search button navigates on match and closes input', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByTestId('search-icon'))

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'resume' }
    })
    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(mockNavigate).toHaveBeenCalledWith('/resume')
    expect(screen.queryByTestId('search-input')).not.toBeInTheDocument()
    expect(screen.getByTestId('search-icon')).toBeInTheDocument()
  })

  test('keeps input open and shows error when no match found', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByTestId('search-icon'))

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'unknown' }
    })
    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(screen.getByTestId('search-input')).toBeInTheDocument()
    expect(screen.getByText('No results found.')).toBeInTheDocument()
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  test('clears error when input changes', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByTestId('search-icon'))

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'unknown' }
    })
    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(screen.getByText('No results found.')).toBeInTheDocument()

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'resume' }
    })

    expect(screen.queryByText('No results found.')).not.toBeInTheDocument()
  })

  test('closes input and clears value on outside click when no error', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByTestId('search-icon'))
    const input = screen.getByRole('textbox')

    fireEvent.change(input, {
      target: { value: 'resume' }
    })

    fireEvent.mouseDown(document.body)

    expect(screen.queryByTestId('search-input')).not.toBeInTheDocument()
    fireEvent.click(screen.getByTestId('search-icon'))
    expect(screen.getByRole('textbox')).toHaveValue('')
  })

  test('keeps input open on outside click when error is present', () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByTestId('search-icon'))

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'unknown' }
    })
    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    fireEvent.mouseDown(document.body)

    expect(screen.getByTestId('search-input')).toBeInTheDocument()
    expect(screen.getByText('No results found.')).toBeInTheDocument()
  })
})
