'use client';
import { useWalletStore } from '@/store/walletStore';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import Link from 'next/link';
import LanguageSwitcher from '@/components/language/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { name } = useWalletStore();
  const { t } = useTranslation();
  return (
    <nav className="flex justify-between items-center bg-white py-[1rem] px-[2rem] shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-[0.5rem]">
        <img
          src="/img/logo2.png"
          alt="SafeTrust Logo"
          className="w-[13rem] h-auto"
        />
      </Link>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-200 rounded-full px-[0.7rem] py-[0.4rem] w-[45%]">
        <select className="bg-white border border-gray-300 text-gray-700 text-[1rem] rounded-full px-[0.8rem] py-[0.3rem] focus:outline-none">
          <option>{t('navBar.rent')}</option>
          <option>{t('navBar.buy')}</option>
        </select>
        <input
          type="text"
          placeholder={t('navBar.searchPlaceHolder')}
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
              d="M21 21l-4.35-4.35M15 11a4 4 0 100-8 4 4 0 000 8zm-7 7H5a2 2-2v-5a2 2-2h3m10 5v1m0-4v1m0 4h1m-1-4h1"
            />
          </svg>
        </button>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-[1rem] ml-auto">
        {/* Notification Bell */}
        <div className="relative">
          <FaBell size={24} className="text-gray-700 cursor-pointer" />
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* User Profile */}
        <LanguageSwitcher />
        <div className="flex items-center space-x-[0.5rem]">
          <span className="text-gray-700 font-medium text-[1rem]">
            {name || 'Randall Valenciano'}
          </span>
          <Link href="/profile">
            <FaUserCircle size={24} className="text-gray-700 cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
