import React from 'react'

interface FeatureProps {
  icon: string
  title: string
}

const Feature: React.FC<FeatureProps> = ({ icon, title }) => (
  <div className="flex flex-col items-center space-y-3 md:flex-row md:items-start md:space-y-0 md:space-x-3">
    <span className="text-4xl">{icon}</span>
    <p className="text-lg font-medium text-center md:text-left">{title}</p>
  </div>
)

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cover bg-center text-white px-6 md:px-16 py-24 md:py-32 flex items-center"
      style={{ backgroundImage: `url('/img/background.png')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-3xl md:max-w-5xl mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 md:mb-8 mt-12 md:mt-0">
          <span className="text-white">Safe</span>
          <span className="text-custom-orange">Trust</span>
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8">
          SafeTrust offers a secure and reliable platform to rent an apartment without the risk of losing your deposit
          money. With blockchain technology, we ensure transparency, protecting both tenants and landlords from
          financial disputes.
        </p>
        <button className="bg-white text-black py-2 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg hover:bg-gray-300 transition mb-8 md:mb-12">
          Get Started Now
        </button>

        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8 md:gap-12">
          <Feature icon="🔒" title="Deposit Security" />
          <Feature icon="🖊️" title="Verified Agreements" />
          <Feature icon="⚙️" title="Automated Contracts" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
