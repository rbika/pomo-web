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
    <S.ThemeToggler
      data-testid="icon-container"
      onClick={() => onThemeChange(nextTheme)}
      {...divProps}
    >
      {theme === EThemes.dark && <IoSunny data-testid="sun-icon" size="100%" />}
      {theme === EThemes.light && (
        <IoMoon data-testid="moon-icon" size="100%" />
      )}
    </S.ThemeToggler>
  )
}

export default ThemeToggler
