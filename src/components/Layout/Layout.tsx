import * as React from 'react'

import { ThemeProvider } from '@emotion/react'

import Footer from '../Footer'
import Header from '../Header'
import * as S from './Layout.styles'
import { EThemes } from '../../types/EThemes'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { themes } from '../../themes'
import ThemeToggler from '../ThemeToggler'
import c from '../../utils/constants'

type LayoutProps = {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  const [theme, setTheme] = useLocalStorage(c.localStorageTheme, EThemes.light)

  function handleThemeChange(nextTheme: EThemes) {
    setTheme(nextTheme)
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <S.Layout>
        <Header data-testid="page-header">
          <ThemeToggler theme={theme} onThemeChange={handleThemeChange} />
        </Header>
        <S.LayoutGrid>
          <S.PageContent>{children}</S.PageContent>
          <Footer data-testid="page-footer" />
        </S.LayoutGrid>
      </S.Layout>
    </ThemeProvider>
  )
}

export default Layout
