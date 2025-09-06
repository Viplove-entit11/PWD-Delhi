import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import AboutPWD from '../components/AboutPWD/AboutPWD'
import OurLeaders from '../components/OurLeaders/OurLeaders'
import Services from '../components/OurServices/Services'
import NeedHelp from '../components/NeedHelp/NeedHelp'
import LatestUpdates from '../components/LatestUpdate_News/LatestUpdates'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <HeroSection/>
      <AboutPWD/>
      <OurLeaders />
      <Services/>
      <NeedHelp />
      <LatestUpdates/>

    </div>
  )
}

export default LandingPage