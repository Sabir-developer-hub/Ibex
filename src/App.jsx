import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <TeamSection/>
      <Footer/>
    </div>
  )
}

export default App
