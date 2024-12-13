import switchLanguage from '@/utils/i18n';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language.toUpperCase());
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang.toUpperCase());
    switchLanguage(lang.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-transparent rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 focus:outline-none"
      >
        {language}
        <svg
          className="w-5 h-5 ml-2 text-gray-500 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-28 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-800"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            {['EN', 'ES'].map((lang) => (
              <li
                key={lang}
                className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                  language === lang
                    ? 'font-bold text-gray-900 dark:text-white'
                    : ''
                }`}
                onClick={() => handleChangeLanguage(lang)}
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
