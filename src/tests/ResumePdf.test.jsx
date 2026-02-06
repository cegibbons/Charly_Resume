import React from 'react'
import { render, screen } from '@testing-library/react'
import ResumePdf from '../components/ResumePdf'

describe('ResumePdf', () => {
  test('renders the PDF iframe', () => {
    render(<ResumePdf />)
    const frame = screen.getByTitle('Resume PDF')
    expect(frame).toBeInTheDocument()
    expect(frame).toHaveAttribute('src', expect.stringContaining('Charly_Gibbons_Resume.pdf'))
  })
})
