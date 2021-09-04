import styled from '@emotion/styled'

export const PomodoroTimer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.textSecondary,
}))

export const TimerSelector = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '50px',
  height: '40px',
  backgroundColor: theme.bgSecondary,
}))

export const TimerSelectorButton = styled.button<{
  active: boolean
}>(({ active, theme }) => ({
  margin: '0 0.5rem',
  border: 0,
  fontSize: 0.9375,
  background: 'transparent',
  borderRadius: '0.5rem',
  padding: '0.25rem 0.5rem',
  fontWeight: active ? 500 : 400,
  color: active ? theme.pomodoroRed : theme.textSecondary,
  transition: 'color 0.2s',
  cursor: 'pointer',

  '&:hover': {
    color: active ? theme.pomodoroRed : theme.textPrimary,
  },
}))

export const Timer = styled.div(({ theme }) => ({
  fontFamily: 'Roboto Mono',
  fontSize: '6rem',
  textAlign: 'center',
  margin: '3rem 0 0',
  color: theme.textPrimary,
}))

export const TimerTitle = styled.div(({ theme }) => ({
  fontSize: '1rem',
  textAlign: 'center',
  margin: '0 0 5rem 0',
  fontWeight: 500,
  color: theme.textPrimary,
}))

export const TimerButton = styled.button(({ theme }) => ({
  border: 0,
  background: theme.pomodoroRed,
  color: 'white',
  height: '3rem',
  width: '8rem',
  borderRadius: '10rem',
  fontSize: '1.25rem',
  paddingBottom: '0.125rem',
  transition: 'all 0.5s',
  margin: '0 3rem',
  cursor: 'pointer',

  '&:hover': {
    background: '#c62828',
  },
}))

export const TimerControls = styled.div({
  display: 'flex',
  alignItems: 'center',
})

export const ResetButton = styled.button(({ theme }) => ({
  backgroundColor: 'transparent',
  borderRadius: '25px',
  width: '40px',
  height: '40px',
  border: 0,
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.textSecondary,
  transition: 'all 0.2s',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  '&:hover': {
    color: theme.textPrimary,
    backgroundColor: theme.bgSecondary,
  },
}))

export const PomodorosCount = styled.strong({
  width: '40px',
  textAlign: 'center',
})
