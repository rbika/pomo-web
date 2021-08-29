import * as React from 'react'
import { screen, render } from '@testing-library/react'
import Header from './Header'

const getLogo = () => screen.getByText(/pomo web/i)

test('renders without errors', () => {
  render(<Header />)

  expect(getLogo()).toBeInTheDocument()
})

test('renders child if provided', () => {
  render(<Header>Child</Header>)

  expect(screen.getByText(/child/i)).toBeInTheDocument()
})
