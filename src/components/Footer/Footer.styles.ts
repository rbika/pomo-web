import styled from '@emotion/styled'

export const Footer = styled.footer(({ theme }) => ({
  marginTop: '3rem',
  padding: '1rem 0',
  borderTop: `1px solid ${theme.border}`,
  color: theme.textSecondary,
  fontSize: '0.825rem',
  display: 'flex',
  justifyContent: 'space-between',
}))

export const HeartEmoji = styled.span({
  fontSize: '0.75rem',
})

export const LinksList = styled.ul({
  listStyle: 'none',
  display: 'flex',
  margin: 0,
})

export const ListItem = styled.li({
  marginLeft: '1rem',
})

export const FooterLink = styled.a(({ theme }) => ({
  color: theme.link,
  transition: 'color 0.2s',
  textDecoration: 'none',

  '&:hover': {
    color: theme.linkHover,
  },
}))
