"use client";

import React from "react";
import { useWalletStore } from "@/store/walletStore";
import { useWallet } from "@/wallet/hooks/useWallet.hook";
import { FaWallet } from "react-icons/fa";
import Link from "next/link";

const Header: React.FC = () => {
  const { connectWallet, disconnectWallet } = useWallet();
  const { address, name } = useWalletStore();

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
          placeholder="Buscar por provincia"
          className="border border-gray-300 rounded-full px-4 py-2 mr-4 text-gray-700 placeholder-gray-400"
        />
        <div className="relative">
          <button
            className="flex items-center bg-orange-400 text-white px-4 py-2 rounded-full"
            onClick={address && name ? handleDisconnect : handleConnect}
            onMouseEnter={() => {
              const tooltip = document.getElementById("wallet-tooltip");
              if (tooltip) tooltip.style.display = "block";
            }}
            onMouseLeave={() => {
              const tooltip = document.getElementById("wallet-tooltip");
              if (tooltip) tooltip.style.display = "none";
            }}
          >
            <FaWallet size={20} className="mr-2" />
            {address && name ? "Disconnect" : "Connect"}
          </button>
          {address && name && (
            <div
              id="wallet-tooltip"
              className="absolute z-10 bg-gray-800 text-white text-sm rounded py-2 px-3 -mt-8 -ml-16"
              style={{
                display: "none",
                whiteSpace: "nowrap",
                maxWidth: "200px",
              }} // Ajustar maxWidth
            >
              <p>{name}</p>
              <p className="text-xs overflow-hidden">{address}</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
