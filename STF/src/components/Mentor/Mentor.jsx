import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Mentor = () => {
  return (
    <div className='bg-secondary-color'>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Mentor