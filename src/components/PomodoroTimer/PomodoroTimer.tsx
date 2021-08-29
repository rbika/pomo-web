import * as React from 'react'
import { useInterval } from '../../hooks/useInterval'
import { ETimerModes } from '../../types/ETimerModes'
import c from '../../utils/constants'
import { formatTime } from '../../utils/formatTime'
import { pomodoroTimerReducer, initialState } from './PomodoroTimer.reducer'
import Notification from 'react-web-notification'
import { IoMdRefresh } from 'react-icons/io'

import * as S from './PomodoroTimer.styles'
import { Helmet } from 'react-helmet'

function PomodoroTimer(): JSX.Element {
  const [state, dispatch] = React.useReducer(pomodoroTimerReducer, initialState)

  useInterval(
    () => {
      dispatch({ type: 'timerTick' })

      if (state.time === 1) {
        if (state.timerMode === ETimerModes.shortBreak) {
          dispatch({ type: 'breakEnd' })
        } else if (state.timerMode === ETimerModes.longBreak) {
          dispatch({ type: 'breakEnd' })
        } else {
          dispatch({ type: 'pomodoroEnd' })
        }
      }
    },
    state.isRunning ? 1000 : null
  )

  function handleToggleTimer() {
    dispatch({ type: 'toggleTimer' })
  }

  function handleResetClick() {
    dispatch({ type: 'resetTimer' })
  }

  return (
    <S.PomodoroTimer>
      <Helmet defer={false}>
        <title>{`${formatTime(state.time)} ${state.timerTitle}`}</title>
      </Helmet>

      <S.TimerSelector>
        <S.TimerSelectorButton
          active={state.timerMode === ETimerModes.pomodoro}
          onClick={() => dispatch({ type: 'setupPomodoro' })}
        >
          Pomodoro
        </S.TimerSelectorButton>

        <S.TimerSelectorButton
          active={state.timerMode === ETimerModes.shortBreak}
          onClick={() => dispatch({ type: 'setupShortBreak' })}
        >
          Short Break
        </S.TimerSelectorButton>

        <S.TimerSelectorButton
          active={state.timerMode === ETimerModes.longBreak}
          onClick={() => dispatch({ type: 'setupLongBreak' })}
        >
          Long Break
        </S.TimerSelectorButton>
      </S.TimerSelector>

      <S.Timer data-testid="timer">{formatTime(state.time)}</S.Timer>

      <S.TimerTitle data-testid="timer-title">{state.timerTitle}</S.TimerTitle>

      <S.TimerControls>
        <S.PomodorosCount data-testid="pomodoro-counter">
          {state.pomodorosCount} / {c.pomodoroCicles}
        </S.PomodorosCount>

        <S.TimerButton onClick={handleToggleTimer}>
          {state.isRunning ? 'Pause' : 'Start'}
        </S.TimerButton>

        <S.ResetButton data-testid="reset-button" onClick={handleResetClick}>
          <IoMdRefresh />
        </S.ResetButton>
      </S.TimerControls>

      {state.notificationMessage && (
        <Notification
          title={state.notificationMessage}
          onShow={() => dispatch({ type: 'clearNotification' })}
        />
      )}
    </S.PomodoroTimer>
  )
}

export default PomodoroTimer
