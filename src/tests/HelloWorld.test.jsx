import React from 'react'
import { render, screen } from '@testing-library/react'
import HelloWorld from '../components/HelloWorld'

describe('HelloWorld', () => {
  test('renders the greeting', () => {
    render(<HelloWorld />)
    expect(screen.getByTestId('hello-header')).toBeInTheDocument()
  })
})
