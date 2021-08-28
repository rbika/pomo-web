import * as React from 'react'

import { ThemeProvider } from '@emotion/react'

import Footer from '../Footer'
import Header from '../Header'
import * as S from './Layout.styles'
import c from '../../utils/constants'
import { EThemes } from '../../types/EThemes'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { themes } from '../../themes'
import ThemeToggler from '../ThemeToggler'

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  const [theme, setTheme] = useLocalStorage(c.localStorageTheme, EThemes.light)

  function handleThemeChange(nextTheme: EThemes) {
    setTheme(nextTheme)
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <S.Layout>
        <Header>
          <ThemeToggler theme={theme} onThemeChange={handleThemeChange} />
        </Header>
        <div style={{ maxWidth: c.maxContainerWidth, margin: '3rem auto' }}>
          {children}
          <Footer />
        </div>
      </S.Layout>
    </ThemeProvider>
  )
}

export default Layout
