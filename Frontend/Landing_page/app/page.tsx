import React from 'react'

import HeroSection from '@/src/components/HeroSection'
import InfoSection from '@/src/components/InfoSection'
import WhatWeOffer from '@/src/components/WhatWeOffer'
import TeamSection from '@/src/components/TeamSection'
import Header from '@/src/layouts/Header'
import Footer from '@/src/layouts/Footer'
import ScrollToTop from '@/src/components/ScrolltoTop'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Header />
        <main className="w-full">
          <HeroSection />
          <InfoSection />
          <WhatWeOffer />
          <TeamSection />
          <ScrollToTop />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home
