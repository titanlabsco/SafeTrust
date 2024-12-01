import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Sidebar: React.FC = () => {
  const suggestions = [
    {
      id: 1,
      title: "Los Yoses",
      address: "329 Calle Santos, Paseo Colón, San José",
      details: "2bd - pet friendly · 1 ba",
      price: "$4,000",
      image: "/img/house1.jpg",
    },
    {
      id: 2,
      title: "Los Yoses",
      address: "329 Calle Santos, Paseo Colón, San José",
      details: "2bd - pet friendly · 1 ba",
      price: "$4,000",
      image: "/img/house1.jpg",
    },
    {
      id: 3,
      title: "Los Yoses",
      address: "329 Calle Santos, Paseo Colón, San José",
      details: "2bd - pet friendly · 1 ba",
      price: "$4,000",
      image: "/img/house1.jpg",
    },
    {
      id: 4,
      title: "Los Yoses",
      address: "329 Calle Santos, Paseo Colón, San José",
      details: "2bd - pet friendly · 1 ba",
      price: "$4,000",
      image: "/img/house1.jpg",
    },
    {
      id: 5,
      title: "Los Yoses",
      address: "329 Calle Santos, Paseo Colón, San José",
      details: "2bd - pet friendly · 1 ba",
      price: "$4,000",
      image: "/img/house1.jpg",
    },
  ];

  return (
    <div className="w-96 p-4 bg-light-primary dark:bg-dark-surface border-r border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Suggestions
      </h2>
      <p className="text-gray-700 dark:text-gray-400 text-sm mb-4">
        More than 200 units available
      </p>
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="flex p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative bg-light-primary dark:bg-dark-surface2 hover:shadow-md dark:hover:shadow-gray-900 transition-shadow"
          >
            <img
              className="w-20 h-20 rounded-lg object-cover"
              src={suggestion.image}
              alt={suggestion.title}
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-gray-900 dark:text-gray-100 font-semibold">
                {suggestion.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {suggestion.address}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {suggestion.details}
              </p>
            </div>
            <button className="absolute top-3 right-3 text-red-500 hover:text-red-400 dark:hover:text-red-300">
              <AiOutlineHeart className="w-5 h-5" />
            </button>
            <p className="absolute bottom-3 right-3 text-green-600 dark:text-green-400 font-bold">
              {suggestion.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
