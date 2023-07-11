import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'

function App() {

  return (
      <div>
        <Sidebar />
        <Main />
        <Work />
        <Projects />
      </div>
  )
}

export default App
