import styled from '@emotion/styled'

export const About = styled.div(({ theme }) => ({
  margin: '10rem 0 5rem',
  color: theme.textSecondary,
  fontSize: '0.9375rem',
}))

export const Title = styled.h2(({ theme }) => ({
  fontSize: '1.25rem',
  color: theme.textPrimary,
}))

export const ExternalLink = styled.a(({ theme }) => ({
  color: theme.link,
  transition: 'color 0.2s',

  '&:hover ': {
    color: theme.linkHover,
  },
}))
