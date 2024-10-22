import React from "react";
import { FaWallet } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-white py-4 px-8 shadow-md">
      <div className="text-2xl font-bold text-gray-800">SafeTrust</div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar por provincia"
          className="border border-gray-300 rounded-full px-4 py-2 mr-4 text-gray-700 placeholder-gray-400"
        />
        <button className="flex items-center bg-orange-400 text-white px-4 py-2 rounded-full">
          <FaWallet size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
