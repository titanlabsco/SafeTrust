import switchLanguage from '@/utils/i18n';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = (language: string) => {
    setLanguage(language);
    switchLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={toggleDropdown}
        className=" flex items-center w-36 gap-2 px-4 py-2 bg-gray-100 border border-gray-300 dark:bg-dark-surface3 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <img src={`/img/${language}.png`} className="w-6 h-4" />
        <span className="text-black dark:text-gray-200">
          {language === 'en'
            ? t('languageBtn.en')
            : language === 'es'
              ? t('languageBtn.es')
              : t('languageBtn.en')}
        </span>
      </button>
      {isOpen && (
        <div className="absolute z-15 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="py-1 text-sm text-gray-700">
            <li
              onClick={() => handleChangeLanguage('en')}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                language === 'en' ? 'bg-gray-100 font-bold' : ''
              }`}
            >
              <img src="/img/en.png" className="w-6 h-4" />
              <span>{t('languageBtn.en')}</span>
            </li>
            <li
              onClick={() => handleChangeLanguage('es')}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                language === 'es' ? 'bg-gray-100 font-bold' : ''
              }`}
            >
              <img src="/img/es.png" className="w-6 h-4" />
              <span>{t('languageBtn.es')}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
