import * as React from 'react'
import Home from './Home'
import { render } from '@testing-library/react'

describe('<Home />', () => {
  test('renders without errors', () => {
    render(<Home />)
  })
})
