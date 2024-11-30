"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BsSortDownAlt } from "react-icons/bs";
import PropertyCard from "./PropertyCard";
import { useTranslation } from "react-i18next";

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
  const {t}=useTranslation();
  const router = useRouter();
  const [sortOption, setSortOption] = useState(t("propertyList.sortBy.orderOne"));
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

  useEffect(() => {
    setSortOption(t("propertyList.sortBy.orderOne"));
  }, [t]);


  return (
    <div className="px-12 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl text-black">
            {t("propertyList.title")}{" "}
            <span className="text-black font-bold"> {t("propertyList.subtitle")}</span>
          </h2>
          <p className="text-gray-500"> {t("propertyList.unitsAvailable")}</p>
        </div>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-gray-500 text-sm focus:outline-none"
          >
            <BsSortDownAlt className="text-lg mr-2" />
            {t("propertyList.sortBy.title")}{" "}
            <span className="text-orange-500 cursor-pointer hover:underline ml-1">
              {sortOption}
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange(t("propertyList.sortBy.orderOne"))}
                >
                   {t("propertyList.sortBy.orderOne")}
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange(t("propertyList.sortBy.orderTwo"))}
                >
                {t("propertyList.sortBy.orderTwo")}
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange(t("propertyList.sortBy.orderThree"))}
                >
                {t("propertyList.sortBy.orderThree")}
                </li>
                <li
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortOptionChange(t("propertyList.sortBy.orderFour"))}
                >
                {t("propertyList.sortBy.orderFour")}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex space-x-2 mb-8">
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100">
        {t("propertyList.filterOne")}
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100">
        {t("propertyList.filterTwo")}
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100">
        {t("propertyList.filterThree")}
        </button>
        <button className="px-4 py-2 text-sm border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100">
        {t("propertyList.filterFour")}
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
