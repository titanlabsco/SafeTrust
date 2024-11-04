"use client";

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
        </div>
      </div>
    </nav>
  );
};

export default Header;
