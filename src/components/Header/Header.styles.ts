import styled from '@emotion/styled'
import { Grid } from 'react-flexbox-grid'
import c from '../../utils/constants'

export const HeaderGrid = styled(Grid)({
  maxWidth: c.maxContainerWidth,
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  margin: '0 auto',
})

export const Header = styled.header(({ theme }) => ({
  backgroundColor: theme.bgSecondary,
  height: '50px',
}))

export const Logo = styled.div(({ theme }) => ({
  color: theme.textPrimary,
  fontSize: '1.125rem',
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    color: theme.textPrimary,
  },
}))

export const LogoImg = styled.img({
  width: 22,
  margin: '0 8px 2px 0',
})
