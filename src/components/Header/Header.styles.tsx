import styled from '@emotion/styled'

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
