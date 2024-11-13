"use client";

import { useWalletStore } from "@/store/walletStore";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Header: React.FC = () => {
  const { name } = useWalletStore();

  return (
    <nav className="flex justify-between items-center bg-white py-[1rem] px-[2rem] shadow-md">
      <Link href="/" className="flex items-center space-x-[0.5rem]">
        <img
          src="/img/logo2.png"
          alt="SafeTrust Logo"
          className="w-[13rem] h-auto"
        />
      </Link>

      <div className="flex items-center bg-gray-200 rounded-full px-[0.7rem] py-[0.4rem] w-[45%]">
        <select className="bg-white border border-gray-300 text-gray-700 text-[1rem] rounded-full px-[0.8rem] py-[0.3rem] focus:outline-none">
          <option>Rent</option>
          <option>Buy</option>
        </select>
        <input
          type="text"
          placeholder="City, province or neighborhood"
          className="bg-transparent w-full text-[1rem] text-gray-700 placeholder-gray-500 px-[0.8rem] focus:outline-none"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-[2rem] h-[2rem] text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M15 11a4 4 0 100-8 4 4 0 000 8zm-7 7H5a2 2 0 01-2-2v-5a2 2-2h3m10 5v1m0-4v1m0 4h1m-1-4h1"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-[0.5rem]">
        <span className="text-gray-700 font-medium text-[1rem]">
          {name || "Randall Valenciano"}
        </span>
        <FaUserCircle size={24} className="text-gray-700" />
      </div>
    </nav>
  );
};

export default Header;
