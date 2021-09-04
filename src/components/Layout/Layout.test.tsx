import * as React from 'react'
import { screen, render } from '@testing-library/react'
import Layout from './Layout'
import c from '../../utils/constants'

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

test('renders light mode by default', () => {
  render(<Layout />)
  expect(screen.getByTestId('moon-icon')).toBeInTheDocument()
})

test('renders dark mode if found in localstorage', () => {
  localStorage.setItem(c.localStorageTheme, 'dark')
  render(<Layout />)
  expect(screen.getByTestId('sun-icon')).toBeInTheDocument()
})

test('renders light mode if found in localstorage', () => {
  localStorage.setItem(c.localStorageTheme, 'light')
  render(<Layout />)
  expect(screen.getByTestId('moon-icon')).toBeInTheDocument()
})
