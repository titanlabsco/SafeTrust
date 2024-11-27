'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsSortDownAlt } from 'react-icons/bs';
import PropertyCard from './PropertyCard';

const properties = [
  {
    image: '/img/house1.jpg',
    title: 'La sabana sur',
    address: '329 Calle Curridabat, patio estación, San José',
    price: '4058',
    promoted: true,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'La sabana sur',
    address: '329 Calle Curridabat, patio estación, San José',
    price: '4058',
    promoted: false,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'La sabana sur',
    address: '329 Calle Curridabat, patio estación, San José',
    price: '4058',
    promoted: false,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: '/img/house1.jpg',
    title: 'La sabana sur',
    address: '329 Calle Curridabat, patio estación, San José',
    price: '4058',
    promoted: true,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
];

const PropertyList: React.FC = () => {
  const router = useRouter();
  const [sortOption, setSortOption] = useState('Relevance');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCardClick = () => {
    router.push('/house');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSortOptionChange = (option: string) => {
    setSortOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="px-12 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl text-black">
            Available for rent in{' '}
            <span className="text-black font-bold">Costa Rica, San José</span>
          </h2>
          <p className="text-gray-500">204 units available</p>
        </div>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-gray-500 text-sm focus:outline-none"
          >
            <BsSortDownAlt className="text-lg mr-2" />
            Sort by:{' '}
            <span className="text-orange-500 cursor-pointer hover:underline ml-1">
              {sortOption}
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange('Relevance')}
                >
                  Relevance
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange('Price (Low to High)')}
                >
                  Price (Low to High)
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange('Price (High to Low)')}
                >
                  Price (High to Low)
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange('Newest')}
                >
                  Newest
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex space-x-2 mb-8">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100">
          All apartments
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100">
          1 bedroom
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100">
          2 bedrooms
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100">
          3 bedrooms
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div
            key={index}
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
