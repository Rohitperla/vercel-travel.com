import React from 'react'
import CustomCarousel from './crouselComponent'

import About from './about'
import Gallery from './gallery'
import Services from './services'

const landingPage = () => {
  return (
    <div>
        <CustomCarousel/> 
        
        <Services/>
        <About/>
        <Gallery/> 
    </div>
  )
}

export default landingPage