import React from 'react'

interface Service {
  title: string
  description: string
  icon: string
}

const WhatWeOffer: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Deposit Protection',
      description:
        'Your deposit money is securely held in escrow, ensuring that it is only released once all rental conditions are met.',
      icon: '💼'
    },
    {
      title: 'Verified Agreements',
      description:
        'All rental agreements are securely verified through blockchain technology, ensuring both parties are protected.',
      icon: '🖊️'
    },
    {
      title: 'Automated Rentals',
      description:
        'Our platform automates the rental process, ensuring smooth transactions from start to finish with smart contracts.',
      icon: '⚙️'
    }
  ]

  return (
    <section id="services" className="bg-custom-dark text-white px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
        <p className="text-lg text-gray-200 mb-12">
          Discover how SafeTrust ensures secure, transparent, and automated rental experiences <br />
          for both tenants and landlords, with a focus on protecting your deposit money.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg p-8 text-center border border-gray-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-black text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer
