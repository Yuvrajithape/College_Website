import React from 'react'

import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/hero.jsx'
import Program from './Components/Program/Program.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'

function App() {
  

  return (
     <div>
      <Navbar />
      <Hero/>
      <div className = 'container'>
        <Title subtitle = 'our programs ' title = 'What we Offer'/>
        <Program />
        <About/>
        <Title subtitle = 'Gallery' title = 'Campus Photos'/>
        <Campus/>
        <Title subtitle='Testimonials' title = 'What student says'/>

        <Testimonials/> 


      </div>
     </div>
  )
}

export default App
