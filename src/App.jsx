import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Work from './components/Work'

function App() {

  return (
      <div>
        <Sidebar />
        <Main />
        <Work />
      </div>
  )
}

export default App
