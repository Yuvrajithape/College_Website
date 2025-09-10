import React from 'react'

import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/hero.jsx'
import Program from './Components/Program/Program.jsx'
import Title from './Components/Title/Title.jsx'

function App() {
  

  return (
     <div>
      <Navbar />
      <Hero/>
      <div className = 'container'>
        <Title subtitle = 'our programs ' title = 'What we Offer'/>
        <Program />
      </div>

     </div>
  )
}

export default App
