import CabBookingSection from '@/components/Home/CabBookingSection'
import CabCtaCardSection from '@/components/Home/CabCtaCardSection'
import CabCTASection from '@/components/Home/CabCTASection'
import ControlledCabCarousel from '@/components/Home/ControlledCabCrauosel'
import HomeHero from '@/components/Home/HomeHero'
import InfiniteCabCarousel from '@/components/Home/InfiniteCabCrauosel'
import TrustBuildCTA from '@/components/Home/TrustBuildCTA'
import TrustHighlights from '@/components/Home/TrustHighLights'
import TrustConveyorSection from '@/components/Home/TrustOrbitSection'
import TrustGlowRailSection from '@/components/Home/TrustOrbitSection'
import TrustElevatorSection from '@/components/Home/TrustOrbitSection'
import RatingSection from '@/components/ProductArchive/RatingSection'

import Footer from '@/utils/Footer'
import Navbar from '@/utils/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <TrustGlowRailSection/>
      <TrustHighlights />
      <CabBookingSection />
      <InfiniteCabCarousel />
      <CabCTASection />
      <CabCtaCardSection/>
      <ControlledCabCarousel/>
      <TrustBuildCTA/>
      <RatingSection/>
      <Footer />
    </>
  )
}

export default page