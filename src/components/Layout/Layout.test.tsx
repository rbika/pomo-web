import * as React from 'react'
import { screen, render } from '@testing-library/react'
import Layout from './Layout'
import c from '../../utils/constants'
import Push from 'push.js'

jest.mock('push.js', () => ({
  Permission: {
    has: () => false,
    request: jest.fn(),
  },
}))

// Queries

const getHeader = () => screen.getByTestId('page-header')
const getFooter = () => screen.getByTestId('page-footer')
const queryNotificationAlert = () =>
  screen.queryByText(/Browser notifications .* ends./i)
const findNotificationAlert = () =>
  screen.findByText(/Browser notifications .* ends./i)

// Tests

describe('<Layout />', () => {
  test('renders without errors', () => {
    render(<Layout />)
    expect(getHeader()).toBeInTheDocument()
    expect(getFooter()).toBeInTheDocument()
  })

  test('renders children when provided', () => {
    render(<Layout>Child</Layout>)
    expect(screen.getByText(/child/i)).toBeInTheDocument()
  })

  describe('Browser permissions', () => {
    describe('Browser notifications', () => {
      test('does not render alert if browser has notifications permission', async () => {
        const spy = jest
          .spyOn(Push.Permission, 'has')
          .mockImplementation(() => true)

        render(<Layout />)
        expect(queryNotificationAlert()).not.toBeInTheDocument()
        spy.mockRestore()
      })

      test('does not render alert if user allows browser notifications', async () => {
        const spy = jest
          .spyOn(Push.Permission, 'request')
          .mockImplementation(() => undefined)

        render(<Layout />)
        expect(queryNotificationAlert()).not.toBeInTheDocument()
        spy.mockRestore()
      })

      test('does not render alert if user did not denied browser notifications', async () => {
        render(<Layout />)
        expect(queryNotificationAlert()).not.toBeInTheDocument()
      })

      test('renders alert if user blocks browser notifications', async () => {
        const spy = jest
          .spyOn(Push.Permission, 'request')
          .mockImplementation((onGranted: any, onDenied: any) => onDenied())

        render(<Layout />)
        expect(await findNotificationAlert()).toBeInTheDocument()
        spy.mockRestore()
      })
    })
  })

  describe('Light and dark theme', () => {
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
  })
})
