import * as React from 'react'
import { useInterval } from '../../hooks/useInterval'
import { ETimerModes } from '../../types/ETimerModes'
import c from '../../utils/constants'
import { formatTime } from '../../utils/formatTime'
import Seo from '../Seo'
import { pomodoroTimerReducer, initialState } from './PomodoroTimer.reducer'
import Notification from 'react-web-notification'
import { IoMdRefresh } from 'react-icons/io'

import * as S from './PomodoroTimer.styles'

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
      <Seo
        title={`${formatTime(state.time)} ${state.timerTitle}`}
        helmetProps={{ defer: false }}
      />

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

      <S.Timer>{formatTime(state.time)}</S.Timer>

      <S.TimerTitle>{state.timerTitle}</S.TimerTitle>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <strong style={{ width: '40px', textAlign: 'center' }}>
          {state.pomodorosCount} / {c.pomodoroCicles}
        </strong>

        <S.TimerButton onClick={handleToggleTimer}>
          {state.isRunning ? 'Pause' : 'Start'}
        </S.TimerButton>

        <S.ResetButton onClick={handleResetClick}>
          <IoMdRefresh />
        </S.ResetButton>
      </div>

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
