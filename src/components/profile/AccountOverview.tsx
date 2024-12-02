import React from 'react';
import { useTranslation } from 'react-i18next';

const AccountOverview: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2 text-black">
        {t('profile.overView.title')}
      </h2>
      <table className="w-full text-left border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b text-black">
              {t('profile.overView.date')}
            </th>
            <th className="px-4 py-2 border-b text-black">
              {t('profile.overView.walletAddress')}
            </th>
            <th className="px-4 py-2 border-b text-black">
              {t('profile.overView.email')}
            </th>
            <th className="px-4 py-2 border-b text-black">
              {t('profile.overView.action')}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b text-black">20/09/2022</td>
            <td className="px-4 py-2 border-b text-black">XMD...22DR</td>
            <td className="px-4 py-2 border-b text-black">
              randalVciano@gmail.com
            </td>
            <td className="px-4 py-2 border-b">
              <button className="text-gray-500">...</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountOverview;
