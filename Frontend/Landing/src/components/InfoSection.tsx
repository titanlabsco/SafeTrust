import React from 'react'

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="bg-white text-black px-16 py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            Renting made safe with <br /> blockchain technology.
          </h2>
        </div>

        <div className="text-lg leading-relaxed">
          <p>
            SafeTrust leverages blockchain-powered smart contracts to ensure secure and risk-free apartment rentals.
            With our system, your deposit money is protected, and transactions are made fully transparent, giving both
            tenants and landlords peace of mind.
          </p>
          <p className="mt-6">
            This innovative solution automates the rental process, ensuring that funds are held securely in escrow until
            all conditions are met. Once both parties have fulfilled their obligations, the deposit is released safely,
            guaranteeing a fair and reliable rental experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
