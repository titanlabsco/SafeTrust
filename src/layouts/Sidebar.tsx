"use client";

import React, { useState } from "react";

const Sidebar: React.FC = () => {
  const [priceRange, setPriceRange] = useState([3200, 206000]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newRange = [...priceRange];
    const value = parseInt(e.target.value, 10);

    if (index === 0) {
      newRange[0] = Math.min(value, priceRange[1] - 1);
    } else {
      newRange[1] = Math.max(value, priceRange[0] + 1);
    }

    setPriceRange(newRange);
  };

  return (
    <div className="w-[20%] bg-white p-6 border-r">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Category</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="category1"
              className="w-4 h-4 text-custom-orange border-gray-300 rounded focus:ring-custom-orange"
              defaultChecked
            />
            <label htmlFor="category1" className="ml-2 text-sm text-gray-700">
              Category
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="category2"
              className="w-4 h-4 text-custom-orange border-gray-300 rounded focus:ring-custom-orange"
              defaultChecked
            />
            <label htmlFor="category2" className="ml-2 text-sm text-gray-700">
              Category
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="category3"
              className="w-4 h-4 text-gray-300 border-gray-300 rounded focus:ring-custom-orange"
            />
            <label htmlFor="category3" className="ml-2 text-sm text-gray-700">
              Category
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Price Range</h3>
        <p className="text-sm text-gray-700 mb-2">
          $ {priceRange[0].toLocaleString()} - $ {priceRange[1].toLocaleString()}
        </p>
        <div className="relative w-full">
          <input
            type="range"
            min="3200"
            max="206000"
            value={priceRange[0]}
            onChange={(e) => handleRangeChange(e, 0)}
            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
            style={{ zIndex: priceRange[0] > 3200 ? "2" : "1" }}
          />
          <input
            type="range"
            min="3200"
            max="206000"
            value={priceRange[1]}
            onChange={(e) => handleRangeChange(e, 1)}
            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
            style={{ zIndex: priceRange[1] < 206000 ? "2" : "1" }}
          />
          <div className="relative w-full h-2 bg-gray-200 rounded-lg">
            <div
              className="absolute h-2 bg-custom-orange rounded-lg"
              style={{
                left: `${((priceRange[0] - 3200) / (206000 - 3200)) * 100}%`,
                right: `${100 - ((priceRange[1] - 3200) / (206000 - 3200)) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
