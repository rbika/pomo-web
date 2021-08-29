import * as React from 'react'
import { screen, render } from '@testing-library/react'
import Layout from './Layout'

const getHeader = () => screen.getByTestId('page-header')
const getFooter = () => screen.getByTestId('page-footer')

test('renders without errors', () => {
  render(<Layout />)
  expect(getHeader()).toBeInTheDocument()
  expect(getFooter()).toBeInTheDocument()
})

test('renders children when provided', () => {
  render(<Layout>Child</Layout>)
  expect(screen.getByText(/child/i)).toBeInTheDocument()
})
