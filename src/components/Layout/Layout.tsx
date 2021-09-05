import * as React from 'react'

import { ThemeProvider } from '@emotion/react'

import Footer from '../Footer'
import Header from '../Header'
import * as S from './Layout.styles'
import { EThemes } from '../../types/EThemes'
import { useLocalStorage } from 'react-use'
import { themes } from '../../themes'
import ThemeToggler from '../ThemeToggler'
import c from '../../utils/constants'
import Push from 'push.js'
import Alert from '../Alert'

type LayoutProps = {
  children?: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element {
  const [theme, setTheme] = useLocalStorage(
    c.localStorageTheme,
    EThemes.light,
    { raw: true }
  )

  const [notificationsDenied, setNotificationsDenied] = React.useState(false)

  React.useEffect(() => {
    if (!Push.Permission.has()) {
      Push.Permission.request(undefined, () => setNotificationsDenied(true))
    }
  }, [])

  return (
    <ThemeProvider theme={themes[theme as EThemes]}>
      <S.Layout>
        <Header data-testid="page-header">
          <ThemeToggler theme={theme as EThemes} onThemeChange={setTheme} />
        </Header>
        <S.LayoutGrid>
          {notificationsDenied && <Alert>{c.notificationsDenied}</Alert>}
          <S.PageContent>{children}</S.PageContent>
          <Footer data-testid="page-footer" />
        </S.LayoutGrid>
      </S.Layout>
    </ThemeProvider>
  )
}

export default Layout
