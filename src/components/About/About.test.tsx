import * as React from 'react'
import { screen, render } from '@testing-library/react'
import About from './About'

const getTitle = () => screen.getByText(/^pomodoro technique/i)
const getAboutText = () => screen.getByText(/the pomodoro .* student - /i)
const getWikiLink = () => screen.getByText(/wikipedia/i)

test('renders without errors', () => {
  render(<About />)

  expect(getTitle()).toBeInTheDocument()
  expect(getAboutText()).toBeInTheDocument()

  expect(getWikiLink()).toHaveAttribute('target', '_blank')
  expect(getWikiLink()).toHaveAttribute(
    'href',
    'https://en.wikipedia.org/wiki/Pomodoro_Technique'
  )
})
