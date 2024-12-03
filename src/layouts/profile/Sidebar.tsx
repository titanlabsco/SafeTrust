import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUser, FaHome, FaUsers } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-1/4 border-r border-gray-300 pr-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 dark:text-gray-200">
        {t('profile.sideTitle')}
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center text-orange-500 font-medium dark:text-gray-200">
          <FaUser className="mr-2" /> {t('profile.account')}
        </li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4 dark:text-gray-200">
        {t('profile.sideSecondTitle')}
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center text-gray-800 dark:text-gray-200">
          <FaHome className="mr-2" /> {t('profile.apartments')}
        </li>
        <li className="flex items-center text-gray-800 dark:text-gray-200">
          <FaUsers className="mr-2" /> {t('profile.offers')}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
