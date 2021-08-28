import { ETimerModes } from '../../types/ETimerModes'
import c from '../../utils/constants'

/**
 * Types
 */

export interface PomodoroTimerState {
  timerMode: ETimerModes
  notificationMessage: string
  timerTitle: string
  time: number
  isRunning: boolean
  pomodorosCount: number
}

type Action =
  | { type: 'setupPomodoro' }
  | { type: 'setupShortBreak' }
  | { type: 'setupLongBreak' }
  | { type: 'pomodoroEnd' }
  | { type: 'breakEnd' }
  | { type: 'toggleTimer' }
  | { type: 'timerTick' }
  | { type: 'resetTimer' }
  | { type: 'clearNotification' }

/**
 * Initial state
 */

export const initialState: PomodoroTimerState = {
  timerMode: ETimerModes.pomodoro,
  notificationMessage: '',
  timerTitle: c.pomodoroText,
  time: c.pomodoroTime,
  isRunning: false,
  pomodorosCount: 0,
}

/**
 * Reducer
 */

export function pomodoroTimerReducer(
  state: PomodoroTimerState,
  action: Action
): PomodoroTimerState {
  if (action.type === 'setupPomodoro') {
    return {
      ...state,
      timerMode: ETimerModes.pomodoro,
      timerTitle: c.pomodoroText,
      time: c.pomodoroTime,
      isRunning: false,
    }
  }

  if (action.type === 'setupShortBreak') {
    return {
      ...state,
      timerMode: ETimerModes.shortBreak,
      timerTitle: c.breakText,
      time: c.shortBreakTime,
      isRunning: false,
    }
  }

  if (action.type === 'setupLongBreak') {
    return {
      ...state,
      timerMode: ETimerModes.longBreak,
      timerTitle: c.breakText,
      time: c.longBreakTime,
      isRunning: false,
    }
  }

  if (action.type === 'pomodoroEnd') {
    const newState = {
      ...state,
      timerTitle: c.breakText,
      pomodorosCount: state.pomodorosCount + 1,
      isRunning: false,
    }

    if (newState.pomodorosCount < c.pomodoroCicles) {
      newState.timerMode = ETimerModes.shortBreak
      newState.time = c.shortBreakTime
      newState.notificationMessage = c.shortBreakNorification
    } else {
      newState.timerMode = ETimerModes.longBreak
      newState.time = c.longBreakTime
      newState.notificationMessage = c.longBreakNorification
    }

    return newState
  }

  if (action.type === 'breakEnd') {
    const newState = {
      ...state,
      timerMode: ETimerModes.pomodoro,
      timerTitle: c.pomodoroText,
      time: c.pomodoroTime,
      isRunning: false,
      notificationMessage: c.pomodoroNorification,
    }

    if (state.timerMode === ETimerModes.longBreak) {
      newState.pomodorosCount = 0
    }

    return newState
  }

  if (action.type === 'toggleTimer') {
    return {
      ...state,
      isRunning: !state.isRunning,
    }
  }

  if (action.type === 'timerTick') {
    return {
      ...state,
      time: state.time - 1,
    }
  }

  if (action.type === 'resetTimer') {
    return initialState
  }

  if (action.type === 'clearNotification') {
    return { ...state, notificationMessage: '' }
  }

  return state
}
