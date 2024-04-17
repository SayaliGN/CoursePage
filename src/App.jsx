import React from 'react'
import Navbar from './components/Navbar/Navbar'
import NavbarSecond from './components/NavbarSecond/NavbarSecond'
import Bodyfirst from './components/BodyFirst/Bodyfirst'
import Card from './components/Cards/Card'
import Bodysecond from './components/BodySecond/Bodysecond'
import Bodythird from './components/BodyThird/Bodythird';

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <NavbarSecond/>
      <Bodyfirst/>
      <Card/>
      <Bodysecond/>
      <Bodythird/>
    </div>
  )
}

export default App