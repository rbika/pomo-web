import styled from '@emotion/styled'

export const ThemeToggler = styled.div(({ theme }) => ({
  height: '1.25rem',
  cursor: 'pointer',
  color: theme.textPrimary,
}))
