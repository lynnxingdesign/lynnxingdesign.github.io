import { useState } from 'react'

import Sidenav from './components/Sidenav'
import Main from './components/main'
import Work from './components/Work'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Sidenav></Sidenav>
      <Main></Main>
      <Project></Project>
      <Work></Work>
      <Contact></Contact>

      
      
    </div>
  )
}

export default App