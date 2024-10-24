import React from 'react'

const InfoSection: React.FC = () => {
  return (
    <section id="info" className="bg-white text-black px-16 py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            With smart contracts, <br /> secure transfers happen.
          </h2>
        </div>

        <div className="text-lg leading-relaxed">
          <p>
            Our blockchain-powered property transfer system ensures secure and decentralized transactions for
            individuals and companies. By using smart contracts, assets such as financial holdings, real estate, and
            vehicles can be transferred with complete transparency and security.
          </p>
          <p className="mt-6">
            This solution enables organizations to automate the entire process, from locking assets in the contract to
            verifying signatures, and ensuring a smooth and reliable transfer to the designated wallets once all
            conditions are met.
          </p>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
