import React from 'react'

import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/hero.jsx'
import Program from './Components/Program/Program.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'

function App() {
  

  return (
     <div>
      <Navbar />
      <Hero/>
      <div className = 'container'>
        <Title subtitle = 'our programs ' title = 'What we Offer'/>
        <Program />
        <About/>
      </div>
     </div>
  )
}

export default App
