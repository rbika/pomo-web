import styled from '@emotion/styled'

export const Alert = styled.div(({ theme }) => ({
  border: `solid 1px ${theme.alertWarnBorder}`,
  borderRadius: '0.5rem',
  backgroundColor: theme.alertWarnBg,
  padding: '1rem',
  fontSize: '0.875rem',
  color: theme.textPrimary,
}))
