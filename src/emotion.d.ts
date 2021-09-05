import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    textPrimary: string
    textSecondary: string
    bgPrimary: string
    bgSecondary: string
    link: string
    linkHover: string
    border: string
    pomodoroRed: string
    alertWarnBg: string
    alertWarnBorder: string
  }
}
