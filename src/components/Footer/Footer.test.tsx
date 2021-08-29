import * as React from 'react'
import { screen, render } from '@testing-library/react'
import Footer from './Footer'

const getMadeByText = () =>
  screen.getByText((_, node) => {
    return node?.textContent === 'Made with ❤️ by rbika'
  })
const getPersonalPageLink = () => screen.getByText(/rbika/i)
const getGithubLink = () => screen.getByText(/github/i)
const getContactLink = () => screen.getByText(/contact/i)

test('renders without errors', () => {
  render(<Footer />)

  expect(getMadeByText()).toBeInTheDocument()

  expect(getPersonalPageLink()).toHaveAttribute('target', '_blank')
  expect(getPersonalPageLink()).toHaveAttribute('href', 'https://rbika.com')

  expect(getGithubLink()).toHaveAttribute('target', '_blank')
  expect(getGithubLink()).toHaveAttribute(
    'href',
    'https://github.com/rbika/pomo-web'
  )

  expect(getContactLink()).toHaveAttribute('target', '_blank')
  expect(getContactLink()).toHaveAttribute('href', 'https://twitter.com/rbika')
})
