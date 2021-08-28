import * as React from 'react'

import * as S from './Footer.styles'

export default function Footer(): JSX.Element {
  return (
    <S.Footer>
      <div>
        Made with <span style={{ fontSize: '0.75rem' }}>❤️</span> by{' '}
        <S.FooterLink href="https://rbika.com" target="_blank">
          rbika
        </S.FooterLink>
      </div>

      <S.LinksList>
        <S.ListItem>
          <S.FooterLink
            href="https://github.com/rbika/pomo-web"
            target="_blank"
          >
            Github
          </S.FooterLink>
        </S.ListItem>
        <S.ListItem>
          <S.FooterLink href="https://twitter.com/rbika" target="_blank">
            Contact
          </S.FooterLink>
        </S.ListItem>
      </S.LinksList>
    </S.Footer>
  )
}
