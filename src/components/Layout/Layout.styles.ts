import styled from '@emotion/styled'
import { Grid } from 'react-flexbox-grid'
import c from '../../utils/constants'

export const Layout = styled.div(({ theme }) => ({
  fontFamily: 'Roboto',
  backgroundColor: theme.bgPrimary,
  minHeight: '100vh',
}))

export const LayoutGrid = styled(Grid)({
  maxWidth: c.maxContainerWidth,
  paddingTop: '1.5rem',
})

export const PageContent = styled.div({
  paddingTop: '1.5rem',
})
