'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsSortDownAlt } from 'react-icons/bs';
import PropertyCard from './PropertyCard';
import { useTranslation } from 'react-i18next';
import { MOCK_DATA_PROPERTY_LIST } from '@/mockData/tableData';
import { Property } from '@/@types/property';

const sortByPrice = (propertyA: Property, propertyB: Property) => {
  return parseInt(propertyA.price) - parseInt(propertyB.price);
};

const sortByPriceReverse = (propertyA: Property, propertyB: Property) => {
  return parseInt(propertyB.price) - parseInt(propertyA.price);
};

const sortByRelevance = (propertyA: Property, propertyB: Property) => {
  if (propertyA.promoted) return -1;
  if (propertyB.promoted) return 1;
  return 0;
};

interface sortListInterface {
  id: number;
  name: string;
  sortFn: ((propertyA: Property, propertyB: Property) => number) | undefined;
}

const sortList: sortListInterface[] = [
  { id: 1, name: 'propertyList.sortBy.orderOne', sortFn: sortByRelevance },
  { id: 2, name: 'propertyList.sortBy.orderTwo', sortFn: sortByPrice },
  { id: 3, name: 'propertyList.sortBy.orderThree', sortFn: sortByPriceReverse },
  { id: 4, name: 'propertyList.sortBy.orderFour', sortFn: undefined },
];

const PropertyList: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [sortOption, setSortOption] = useState<sortListInterface>(sortList[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [propertySort, setPropertySort] = useState<
    ((propertyA: any, propertyB: any) => number) | undefined
  >(() => (a: Property, b: Property) => sortByRelevance(a, b));

  const handleCardClick = () => {
    router.push('/house');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSortOptionChange = (option: sortListInterface) => {
    setSortOption(option);
    setDropdownOpen(false);
    setPropertySort(() => option.sortFn);
  };

  return (
    <div className="px-12 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl text-black dark:text-gray-200">
            {t('propertyList.title')}{' '}
            <span className="text-black font-bold dark:text-gray-200">
              {' '}
              {t('propertyList.subtitle')}
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-200">
            {' '}
            {t('propertyList.unitsAvailable')}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-gray-500 dark:text-gray-200 text-sm focus:outline-none"
          >
            <BsSortDownAlt className="text-lg mr-2 dark:text-gray-200" />
            {t('propertyList.sortBy.title')}{' '}
            <span className="text-orange-500 cursor-pointer hover:underline ml-1">
              {t(sortOption.name)}
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                {sortList.map((option) => (
                  <li
                    key={option.id}
                    className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSortOptionChange(option)}
                  >
                    {t(option.name)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex space-x-2 mb-8">
        <button className="px-4 py-2 text-sm border border-gray-300 dark:text-gray-200 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:text-black">
          {t('propertyList.filterOne')}
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:text-black">
          {t('propertyList.filterTwo')}
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 dark:text-gray-200 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:text-black">
          {t('propertyList.filterThree')}
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 dark:text-gray-200 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:text-black">
          {t('propertyList.filterFour')}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {MOCK_DATA_PROPERTY_LIST.sort(propertySort).map((property, index) => (
          <div
            key={property.title}
            onClick={handleCardClick}
            className="transform transition-transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out cursor-pointer"
          >
            <PropertyCard
              image={property.image}
              title={property.title}
              address={property.address}
              price={property.price}
              promoted={property.promoted}
              beds={property.beds}
              baths={property.baths}
              petFriendly={property.petFriendly}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
