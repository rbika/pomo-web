import * as React from 'react'

import * as S from './Header.styles'
import tomatoImg from '../../images/tomato.svg'

type HeaderProps = {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function Header({ children, ...divProps }: HeaderProps): JSX.Element {
  return (
    <S.Header {...divProps}>
      <S.HeaderGrid>
        <S.Logo>
          <S.LogoImg src={tomatoImg} alt="tomato" />
          Pomo Web
        </S.Logo>

        {children}
      </S.HeaderGrid>
    </S.Header>
  )
}

export default Header
