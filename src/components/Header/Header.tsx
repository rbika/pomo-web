import * as React from 'react'

import * as S from './Header.styles'
import tomatoImg from '../../images/tomato.svg'
import { Grid } from 'react-flexbox-grid'
import c from '../../utils/constants'

type HeaderProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function Header({ children, ...divProps }: HeaderProps): JSX.Element {
  return (
    <S.Header {...divProps}>
      <Grid
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
      </Grid>
    </S.Header>
  )
}

export default Header
