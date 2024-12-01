"use client";

import { useWalletStore } from "@/store/walletStore";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/providers/ThemeProvider';

const Header: React.FC = () => {
  const { name } = useWalletStore();
  const { theme } = useTheme();

  return (
    <nav className="flex justify-between items-center bg-light-primary dark:bg-dark-surface py-[1rem] px-[2rem] border-b border-gray-200/50 dark:border-gray-700/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] dark:shadow-[0_4px_15px_-3px_rgba(0,0,0,0.4)] transition-all duration-300">
      <Link href="/" className="flex items-center space-x-[0.5rem]">
        <img
          src={theme === 'dark' ? "/img/logolight.png" : "/img/logo2.png"}
          alt="SafeTrust Logo"
          className="w-[13rem] h-auto"
        />
      </Link>

      <div className="flex items-center bg-gray-200 dark:bg-dark-surface border border-gray-300 rounded-full px-[0.7rem] py-[0.4rem] w-[45%]">
        <select className="bg-light-primary dark:bg-dark-surface border border-gray-300 text-gray-700 dark:text-gray-200 text-[1rem] rounded-full px-[0.8rem] py-[0.3rem] focus:outline-none">
          <option>Rent</option>
          <option>Buy</option>
        </select>
        <input
          type="text"
          placeholder="City, province or neighborhood"
          className="bg-transparent w-full text-[1rem] text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 px-[0.8rem] focus:outline-none"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-[2rem] h-[2rem] text-gray-600 dark:text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M15 11a4 4 0 100-8 4 4 0 000 8zm-7 7H5a2 2-2v-5a2 2-2h3m10 5v1m0-4v1m0 4h1m-1-4h1"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-[0.5rem]">
        <span className="text-gray-700 dark:text-gray-200 font-medium text-[1rem]">
          {name || "Randall Valenciano"}
        </span>
        <Link href="/profile">
          <FaUserCircle size={24} className="text-gray-700 dark:text-gray-200 cursor-pointer" />
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
