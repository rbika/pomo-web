import React from 'react'
import Layout from './components/Layout'
import Seo from './components/Seo'
import About from './components/About'
import PomodoroTimer from './components/PomodoroTimer'

function App(): JSX.Element {
  return (
    <Layout>
      <Seo title="Pomodoro Timer" />
      <PomodoroTimer />
      <About />
    </Layout>
  )
}

export default App
