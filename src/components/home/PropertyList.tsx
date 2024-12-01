"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BsSortDownAlt } from "react-icons/bs";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    image: "/img/house1.jpg",
    title: "La sabana sur",
    address: "329 Calle Curridabat, patio estación, San José",
    price: "4058",
    promoted: true,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: "/img/house1.jpg",
    title: "La sabana sur",
    address: "329 Calle Curridabat, patio estación, San José",
    price: "4058",
    promoted: false,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: "/img/house1.jpg",
    title: "La sabana sur",
    address: "329 Calle Curridabat, patio estación, San José",
    price: "4058",
    promoted: false,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
  {
    image: "/img/house1.jpg",
    title: "La sabana sur",
    address: "329 Calle Curridabat, patio estación, San José",
    price: "4058",
    promoted: true,
    beds: 2,
    baths: 1,
    petFriendly: true,
  },
];

const PropertyList: React.FC = () => {
  const router = useRouter();
  const [sortOption, setSortOption] = useState("Relevance");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCardClick = () => {
    router.push("/house");
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
          <h2 className="text-2xl text-gray-900 dark:text-gray-100">
            Available for rent in{" "}
            <span className="text-gray-900 dark:text-white font-bold">
              Costa Rica, San José
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">204 units available</p>
        </div>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-gray-500 dark:text-gray-400 text-sm focus:outline-none"
          >
            <BsSortDownAlt className="text-lg mr-2" />
            Sort by:{" "}
            <span className="text-orange-500 cursor-pointer hover:underline ml-1">
              {sortOption}
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-light-primary dark:bg-dark-surface border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
              <ul className="py-1">
                {["Relevance", "Price (Low to High)", "Price (High to Low)", "Newest"].map(
                  (option) => (
                    <li
                      key={option}
                      className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleSortOptionChange(option)}
                    >
                      {option}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex space-x-2 mb-8">
        {["All apartments", "1 bedroom", "2 bedrooms", "3 bedrooms"].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <div
            key={index}
            onClick={handleCardClick}
            className="transform transition-transform hover:scale-105 hover:shadow-lg dark:hover:shadow-gray-900 duration-300 ease-in-out cursor-pointer"
          >
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;