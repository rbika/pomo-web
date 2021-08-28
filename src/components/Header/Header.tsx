import * as React from 'react'

import * as S from './Header.styles'
import c from '../../utils/constants'
import tomatoImg from '../../images/tomato.svg'

type HeaderProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function Header({ children, ...divProps }: HeaderProps): JSX.Element {
  return (
    <S.Header {...divProps}>
      <div
        style={{
          maxWidth: c.maxContainerWidth,
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          margin: '0 auto',
        }}
      >
        <S.Logo>
          <img
            src={tomatoImg}
            style={{ width: 22, margin: '0 8px 2px 0' }}
            alt="tomato"
          />
          Pomo Web
        </S.Logo>

        {children}
      </div>
    </S.Header>
  )
}

export default Header
