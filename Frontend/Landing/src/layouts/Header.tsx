'use client'

import React, { useState } from 'react'
import { Link } from 'react-scroll'
import useMetaMask from '../hooks/useWallet'

const Header: React.FC = () => {
  const { account, connectWallet } = useMetaMask()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white flex justify-between items-center px-4 py-4 md:px-8 shadow-md z-50">
      <div className="text-2xl md:text-3xl font-semibold">
        <span className="text-black">Titan</span>
        <span className="text-custom-orange">Labs</span>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          ☰
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="info"
          smooth={true}
          duration={800}
          className="cursor-pointer text-black hover:text-custom-orange transition"
        >
          Info
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={800}
          className="cursor-pointer text-black hover:text-custom-orange transition"
        >
          Services
        </Link>
        <Link
          to="team"
          smooth={true}
          duration={800}
          className="cursor-pointer text-black hover:text-custom-orange transition"
        >
          Team
        </Link>

        {account ? (
          <a
            href={`https://etherscan.io/address/${account}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button nav-button btn-sm mx-4"
          >
            <button className="bg-custom-dark text-white py-2 px-4 rounded-md transition">
              {`${account.slice(0, 6)}...${account.slice(-4)}`}
            </button>
          </a>
        ) : (
          <button
            className="bg-custom-dark hover:bg-slate-950 text-white py-2 px-4 rounded-md transition"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg flex flex-col items-center space-y-6">
            <Link
              to="info"
              smooth={true}
              duration={800}
              className="cursor-pointer text-black hover:text-custom-orange transition text-xl"
              onClick={() => setIsOpen(false)}
            >
              Info
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={800}
              className="cursor-pointer text-black hover:text-custom-orange transition text-xl"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="team"
              smooth={true}
              duration={800}
              className="cursor-pointer text-black hover:text-custom-orange transition text-xl"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>

            {account ? (
              <a
                href={`https://etherscan.io/address/${account}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button nav-button btn-sm mx-4"
              >
                <button className="bg-custom-dark text-white py-2 px-4 rounded-md transition">
                  {`${account.slice(0, 6)}...${account.slice(-4)}`}
                </button>
              </a>
            ) : (
              <button
                className="bg-custom-dark hover:bg-slate-950 text-white py-2 px-4 rounded-md transition"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
