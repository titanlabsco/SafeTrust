'use client';

import { FaUserCircle, FaBell, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/providers/ThemeProvider';
import LanguageSwitcher from '@/components/language/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleMenu = (menu: string) => {
    if (menu === 'search') {
      setIsSearchVisible(!isSearchVisible);
      if (isProfileVisible) setIsProfileVisible(false);
    } else if (menu === 'profile') {
      setIsProfileVisible(!isProfileVisible);
      if (isSearchVisible) setIsSearchVisible(false);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-[#1E1E1E] dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src={theme === 'dark' ? '/img/logolight.png' : '/img/logo2.png'}
              alt="SafeTrust Logo"
              className="h-12"
            />
          </Link>
          <span className="ml-2 text-3xl font-bold text-black dark:text-white">
            SafeTrust
          </span>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4 ml-auto">
          <div>
            <LanguageSwitcher />
          </div>
          <div className="relative">
            <FaBell
              size={24}
              className="text-black dark:text-white cursor-pointer"
              title={t('header.notifications')}
            />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>
          <div className="relative">
            <button
              onClick={() => toggleMenu('search')}
              className="flex items-center justify-center w-10 h-10 text-black dark:text-white focus:outline-none"
              title={t('header.search')}
            >
              <FaSearch size={20} />
            </button>
            {isSearchVisible && (
              <div className="absolute top-full right-0 mt-2 w-[250px] bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 rounded-lg shadow-md p-2 z-50">
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#1E1E1E] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder={t('header.search')}
                />
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleMenu('profile')}
              className="flex items-center justify-center w-10 h-10 text-black dark:text-white focus:outline-none"
              title={t('header.profile')}
            >
              <FaUserCircle size={24} />
            </button>
            {isProfileVisible && (
              <div className="absolute top-full right-0 mt-2 w-[200px] bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 rounded-lg shadow-md z-50">
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-900 dark:text-white font-semibold">
                    Randall Valenciano
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    name@example.com
                  </p>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                  <li>
                    <a
                      href="/profile/my-apartments"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {t('header.myApartments')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {t('header.settings')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {t('header.signOut')}
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
