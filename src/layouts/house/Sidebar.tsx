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
    <div className="w-96 p-4 bg-white">
      <h2 className="text-xl font-bold text-black mb-2">Suggestions</h2>
      <p className="text-gray-700 text-sm mb-4">
        More than 200 units available
      </p>
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="flex p-4 border border-gray-200 rounded-lg relative"
          >
            <img
              className="w-20 h-20 rounded-lg object-cover"
              src={suggestion.image}
              alt={suggestion.title}
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-black font-semibold">{suggestion.title}</h3>
              <p className="text-gray-500 text-sm">{suggestion.address}</p>
              <p className="text-gray-500 text-sm">{suggestion.details}</p>
            </div>
            <button className="absolute top-3 right-3 text-red-500 hover:text-red-700">
              <AiOutlineHeart className="w-5 h-5" />
            </button>
            <p className="absolute bottom-3 right-3 text-green-600 font-bold">
              {suggestion.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
