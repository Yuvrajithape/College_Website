import React from 'react'

import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/hero.jsx'
import Program from './Components/Program/Program.jsx'

function App() {
  

  return (
     <div>
      <Navbar />
      <Hero/>
      <div className = 'container'>
        <Program />
      </div>

     </div>
  )
}

export default App
