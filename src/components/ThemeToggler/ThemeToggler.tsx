import * as React from 'react'

import { IoSunny, IoMoon } from 'react-icons/io5'
import { EThemes } from '../../types/EThemes'

import * as S from './ThemeToggler.styles'

type ThemeTogglerProps = {
  theme: EThemes
  onThemeChange: (v: EThemes) => void
} & React.HTMLAttributes<HTMLDivElement>

const ThemeToggler = ({
  theme,
  onThemeChange,
  ...divProps
}: ThemeTogglerProps): JSX.Element => {
  const nextTheme = theme === EThemes.light ? EThemes.dark : EThemes.light

  return (
    <S.ThemeToggler onClick={() => onThemeChange(nextTheme)} {...divProps}>
      {theme === EThemes.dark && <IoSunny size="1.25rem" />}
      {theme === EThemes.light && <IoMoon size="1.25rem" />}
    </S.ThemeToggler>
  )
}

export default ThemeToggler
