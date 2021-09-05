import Alert from './Alert'
import { screen, render } from '@testing-library/react'
import * as React from 'react'

describe('<Alert />', () => {
  test('renders without errors', () => {
    render(<Alert>Lorem ipsun</Alert>)

    expect(screen.getByText(/lorem ipsun/i)).toBeInTheDocument()
  })
})
