export default {
  //Duration in seconds for each timer mode
  pomodoroTime: 1500, // 25 minutes
  shortBreakTime: 300, // 5 minutes
  longBreakTime: 900, // 15 minutes

  // Number of pomodoros before long break
  pomodoroCicles: 4,

  // Notification texts
  pomodoroNorification: '🍅 Time to focus!',
  shortBreakNorification: '☕️ Time for a break!',
  longBreakNorification: '😎 Time for a break!',

  // Alert texts
  notificationsDenied:
    'Browser notifications blocked. Please, enable notifications to be notified when each interval ends.',

  // Timer texts
  pomodoroText: 'Focus time',
  breakText: 'Break time',

  // Layout
  maxContainerWidth: 720,

  // Local storage keys
  localStorageTheme: 'pw-theme',
}
