import * as React from 'react'
import { screen, render } from '@testing-library/react'
import ThemeToggler from './ThemeToggler'
import { EThemes } from '../../types/EThemes'
import userEvent from '@testing-library/user-event'

const getIconContainer = () => screen.getByTestId('icon-container')
const getSunIcon = () => screen.getByTestId('sun-icon')
const getMoonIcon = () => screen.getByTestId('moon-icon')
const querySunIcon = () => screen.queryByTestId('sun-icon')
const queryMoonIcon = () => screen.queryByTestId('moon-icon')

test('renders without errors', () => {
  render(<ThemeToggler theme={EThemes.light} onThemeChange={jest.fn()} />)
  expect(getIconContainer()).toBeInTheDocument()
})

test('renders moon icon when theme is "light"', () => {
  render(<ThemeToggler theme={EThemes.light} onThemeChange={jest.fn()} />)
  expect(getMoonIcon()).toBeInTheDocument()
  expect(querySunIcon()).not.toBeInTheDocument()
})

test('renders sun icon when theme is "dark"', () => {
  render(<ThemeToggler theme={EThemes.dark} onThemeChange={jest.fn()} />)
  expect(getSunIcon()).toBeInTheDocument()
  expect(queryMoonIcon()).not.toBeInTheDocument()
})

test('calls onThemeChange with "dark" value when moon icon is clicked', () => {
  const handleClick = jest.fn()
  render(<ThemeToggler theme={EThemes.light} onThemeChange={handleClick} />)
  userEvent.click(getIconContainer())
  expect(handleClick).toHaveBeenCalledWith('dark')
})

test('calls onThemeChange with "light" value when sun icon is clicked', () => {
  const handleClick = jest.fn()
  render(<ThemeToggler theme={EThemes.dark} onThemeChange={handleClick} />)
  userEvent.click(getIconContainer())
  expect(handleClick).toHaveBeenCalledWith('light')
})
