import React from 'react';
import CountrySelect from '@/components/profile/CountrySelect';
import { useTranslation } from 'react-i18next';

const ProfileForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-black">
      <input
        type="text"
        placeholder={t('profile.nameHolder')}
        defaultValue="Randall"
        className="border border-gray-300 rounded-lg px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder={t('profile.SurnameHolder')}
        defaultValue="Valenciano"
        className="border border-gray-300 rounded-lg px-4 py-2 text-black"
      />
      <div className="flex">
        <CountrySelect />
        <input
          type="text"
          placeholder={t('profile.phoneHolder')}
          defaultValue="6498 6325"
          className="border-t border-r border-b border-gray-300 rounded-r-lg px-4 py-2 flex-grow text-black"
        />
      </div>
      <input
        type="text"
        placeholder={t('profile.LocationHolder')}
        defaultValue="Costa Rica, San José"
        className="border border-gray-300 rounded-lg px-4 py-2 text-black"
      />
    </div>
  );
};

export default ProfileForm;
