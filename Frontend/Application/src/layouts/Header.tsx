"use client";

import React, { useState } from "react";
import { useWalletStore } from "@/store/walletStore";
import { useWallet } from "@/wallet/hooks/useWallet.hook";
import { FaWallet, FaBars } from "react-icons/fa";
import Link from "next/link";

const Header: React.FC = () => {
  const { connectWallet, disconnectWallet } = useWallet();
  const { address, name } = useWalletStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleConnect = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleDisconnect = async () => {
    try {
      if (disconnectWallet) {
        await disconnectWallet();
      }
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return (
    <nav className="flex justify-between items-center bg-white py-4 px-8 shadow-md">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        SafeTrust
      </Link>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search by province"
          className="border border-gray-300 rounded-full px-4 py-2 mr-4 text-gray-700 placeholder-gray-400"
        />
        <div className="relative flex items-center space-x-2">
          <button
            className="flex items-center bg-custom-orange text-white px-4 py-2 rounded-full"
            onClick={address && name ? handleDisconnect : handleConnect}
          >
            <FaWallet size={20} className="mr-2" />
            {address && name ? "Disconnect" : "Connect"}
          </button>

          {address && name && (
            <>
              <button
                className="flex items-center justify-center bg-custom-orange text-white p-2 rounded-full"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaBars size={20} />
              </button>
              <div
                className={`absolute top-12 right-0 bg-white text-black shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out transform ${
                  menuOpen
                    ? "scale-100 opacity-100 translate-y-0"
                    : "scale-95 opacity-0 translate-y-[-20px]"
                }`}
              >
                <Link
                  href="/escrow/create"
                  className="block mb-2 no-underline hover:no-underline"
                >
                  Initialize Escrow
                </Link>
                <Link
                  href="/escrow/fund"
                  className="block mb-2 no-underline hover:no-underline"
                >
                  Fund Escrow
                </Link>
                <Link
                  href="/escrow/complete"
                  className="block mb-2 no-underline hover:no-underline"
                >
                  Complete Escrow
                </Link>
                <Link
                  href="/escrow/cancelled"
                  className="block mb-2 no-underline hover:no-underline"
                >
                  Cancelled Escrow
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
