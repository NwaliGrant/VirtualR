import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkflowSection from './components/WorkflowSection'
import Pricing from './components/Picing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
    <Navbar />  
      <div className="max-w-7xl mx-auto pt-20 px-6">
         <HeroSection />
      </div>
      <FeatureSection />
      <WorkflowSection />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
  