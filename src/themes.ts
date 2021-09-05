import { Theme } from '@emotion/react'

export const themes: { [key: string]: Theme } = {
  light: {
    textPrimary: '#424242',
    textSecondary: '#757575',
    bgPrimary: '#fafafa',
    bgSecondary: '#eee',
    link: '#9e9e9e',
    linkHover: '#757575',
    border: '#e0e0e0',
    pomodoroRed: '#e53935',
    alertWarnBg: '#fff3cd',
    alertWarnBorder: '#efe472',
  },
  dark: {
    textPrimary: '#eee',
    textSecondary: '#bdbdbd',
    bgPrimary: '#0d1117',
    bgSecondary: '#000',
    link: '#9e9e9e',
    linkHover: '#bdbdbd',
    border: '#8b949e',
    pomodoroRed: '#e53935',
    alertWarnBg: '#bb800926',
    alertWarnBorder: '#bb800966',
  },
}
