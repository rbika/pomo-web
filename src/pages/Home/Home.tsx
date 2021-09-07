import * as React from 'react'
import Layout from '../../components/Layout'
import About from '../../components/About'
import PomodoroTimer from '../../components/PomodoroTimer'

function Home(): JSX.Element {
  return (
    <Layout>
      <PomodoroTimer />
      <About />
    </Layout>
  )
}

export default Home
