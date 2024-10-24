import React from 'react'

interface Service {
  title: string
  description: string
  icon: string
}

const WhatWeOffer: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Asset Transfer',
      description:
        'Securely transfer assets such as real estate, vehicles, and financial holdings through smart contracts and verified signatures.',
      icon: '🏠'
    },
    {
      title: 'Signature Verification',
      description:
        'Ensure the authenticity of all parties involved with decentralized signature verification using Hypercycle technology.',
      icon: '🖊️'
    },
    {
      title: 'Automated Process',
      description:
        'Automatically handle asset locking, signature validation, and final transfers using Trustless Work technology.',
      icon: '⚙️'
    }
  ]

  return (
    <section id="services" className="bg-custom-dark text-white px-8 md:px-16 py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
        <p className="text-lg text-gray-200 mb-12">
          Explore our key solutions designed to ensure <br />
          secure, efficient, and transparent property transfers <br />
          for individuals and organizations.
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
