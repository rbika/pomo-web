import * as React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import PomodoroTimer from './PomodoroTimer'
import userEvent from '@testing-library/user-event'

beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

const getSelectorPomodoro = () =>
  screen.getByRole('button', { name: /pomodoro/i })
const getSelectorShortBreak = () =>
  screen.getByRole('button', { name: /short break/i })
const getSelectorLongBreak = () =>
  screen.getByRole('button', { name: /long break/i })
const getTimer = () => screen.getByTestId('timer')
const getTimerTitle = () => screen.getByTestId('timer-title')
const getPomodoroCounter = () => screen.getByTestId('pomodoro-counter')
const getStartButton = () => screen.getByRole('button', { name: /start/i })
const getPauseButton = () => screen.getByRole('button', { name: /pause/i })
const queryStartButton = () => screen.queryByRole('button', { name: /start/i })
const queryPauseButton = () => screen.queryByRole('button', { name: /pause/i })
const getResetButton = () => screen.getByTestId('reset-button')

const expectPomodoroSetup = () => {
  expect(getSelectorPomodoro()).toHaveStyle({ fontWeight: 500 })
  expect(getSelectorShortBreak()).toHaveStyle({ fontWeight: 400 })
  expect(getSelectorLongBreak()).toHaveStyle({ fontWeight: 400 })
  expect(getTimer()).toHaveTextContent('25:00')
  expect(getTimerTitle()).toHaveTextContent('Focus time')
}

const expectShortBreakSetup = () => {
  expect(getSelectorPomodoro()).toHaveStyle({ fontWeight: 400 })
  expect(getSelectorShortBreak()).toHaveStyle({ fontWeight: 500 })
  expect(getSelectorLongBreak()).toHaveStyle({ fontWeight: 400 })
  expect(getTimer()).toHaveTextContent('05:00')
  expect(getTimerTitle()).toHaveTextContent('Break time')
}

const expectLongBreakSetup = () => {
  expect(getSelectorPomodoro()).toHaveStyle({ fontWeight: 400 })
  expect(getSelectorShortBreak()).toHaveStyle({ fontWeight: 400 })
  expect(getSelectorLongBreak()).toHaveStyle({ fontWeight: 500 })
  expect(getTimer()).toHaveTextContent('15:00')
  expect(getTimerTitle()).toHaveTextContent('Break time')
}

test('renders without errors', () => {
  render(<PomodoroTimer />)

  expect(getSelectorPomodoro()).toBeInTheDocument()
  expect(getSelectorShortBreak()).toBeInTheDocument()
  expect(getSelectorLongBreak()).toBeInTheDocument()
  expect(getStartButton()).toBeInTheDocument()
  expect(getResetButton()).toBeInTheDocument()
  expect(getPomodoroCounter()).toHaveTextContent('0 / 4')
  expectPomodoroSetup()
})

test('setups short break interval when button is clicked', () => {
  render(<PomodoroTimer />)
  userEvent.click(getSelectorShortBreak())

  expectShortBreakSetup()
})

test('setups long break interval when button is clicked', () => {
  render(<PomodoroTimer />)
  userEvent.click(getSelectorLongBreak())

  expectLongBreakSetup()
})

test('setups pomodoro interval when button is clicked', () => {
  render(<PomodoroTimer />)
  userEvent.click(getSelectorLongBreak())
  userEvent.click(getSelectorPomodoro())

  expectPomodoroSetup()
})

test('switches start and pause buttons', () => {
  render(<PomodoroTimer />)

  userEvent.click(getStartButton())
  expect(getPauseButton()).toBeInTheDocument()
  expect(queryStartButton()).not.toBeInTheDocument()

  userEvent.click(getPauseButton())
  expect(getStartButton()).toBeInTheDocument()
  expect(queryPauseButton()).not.toBeInTheDocument()
})

test('starts timer when button is clicked', async () => {
  render(<PomodoroTimer />)
  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(5000))

  expect(getTimer()).toHaveTextContent('24:55')
})

test('pauses timer when button is clicked', async () => {
  render(<PomodoroTimer />)
  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(5000))

  userEvent.click(getPauseButton())
  await waitFor(() => jest.advanceTimersByTime(5000))

  expect(getTimer()).toHaveTextContent('24:55')
})

test('resets timer when button is clicked', async () => {
  render(<PomodoroTimer />)
  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(5000))

  userEvent.click(getResetButton())
  await waitFor(() => jest.advanceTimersByTime(5000))

  expectPomodoroSetup()
  expect(getPomodoroCounter()).toHaveTextContent('0 / 4')
})

test('changes to short break interval when pomodoro ends', async () => {
  render(<PomodoroTimer />)
  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(1500000)) // 25 minutes

  expectShortBreakSetup()
  expect(getPomodoroCounter()).toHaveTextContent('1 / 4')
})

test('changes to pomodoro interval when short break ends', async () => {
  render(<PomodoroTimer />)
  userEvent.click(getSelectorShortBreak())
  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(300000)) // 5 minutes

  expectPomodoroSetup()
})

test('changes to pomodoro interval when long break ends', async () => {
  render(<PomodoroTimer />)
  userEvent.click(getSelectorLongBreak())
  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(900000)) // 15 minutes
  expect(getPomodoroCounter()).toHaveTextContent('0 / 4')

  expectPomodoroSetup()
})

test('changes to long break interval after 4 pomodoros', async () => {
  render(<PomodoroTimer />)

  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(1500000)) // 25 minutes

  userEvent.click(getSelectorPomodoro())
  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(1500000)) // 25 minutes

  userEvent.click(getSelectorPomodoro())
  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(1500000)) // 25 minutes

  userEvent.click(getSelectorPomodoro())
  userEvent.click(getStartButton())
  await waitFor(() => jest.advanceTimersByTime(1500000)) // 25 minutes

  expectLongBreakSetup()
  expect(getPomodoroCounter()).toHaveTextContent('4 / 4')
})
