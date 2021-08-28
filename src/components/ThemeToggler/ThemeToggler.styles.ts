import styled from '@emotion/styled'

export const ThemeToggler = styled.div(({ theme }) => ({
  cursor: 'pointer',
  color: theme.textPrimary,
}))
