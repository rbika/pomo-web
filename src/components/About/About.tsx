import * as React from 'react'

import * as S from './About.styles'

export default function About(): JSX.Element {
  return (
    <S.About>
      <S.Title>Pomodoro Technique</S.Title>
      <p>
        The Pomodoro Technique is a time management method developed by
        Francesco Cirillo in the late 1980s. The technique uses a timer to break
        down work into intervals, traditionally 25 minutes in length, separated
        by short breaks. Each interval is known as a pomodoro, from the Italian
        word for &apos;tomato&apos;, after the tomato-shaped kitchen timer that
        Cirillo used as a university student -{' '}
        <S.ExternalLink
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </S.ExternalLink>
        .
      </p>
    </S.About>
  )
}
