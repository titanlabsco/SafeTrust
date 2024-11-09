"use client";

import React, { useState } from "react";
import {
  FaUmbrellaBeach,
  FaTree,
  FaMountain,
  FaHome,
  FaCloudSun,
} from "react-icons/fa";
import { MdOutlinePool, MdOutlineVilla } from "react-icons/md";

interface Filter {
  label: string;
  icon: React.ReactNode;
}

const filters: Filter[] = [
  { label: "Tropical", icon: <FaUmbrellaBeach size={24} /> },
  { label: "Amazing View", icon: <FaTree size={24} /> },
  { label: "Caves", icon: <FaMountain size={24} /> },
  { label: "Mansions", icon: <MdOutlineVilla size={24} /> },
  { label: "Incredible Pools", icon: <MdOutlinePool size={24} /> },
  { label: "Cabins", icon: <FaHome size={24} /> },
  { label: "Beachfront", icon: <FaUmbrellaBeach size={24} /> },
  { label: "Countryside", icon: <FaTree size={24} /> },
  { label: "Mysticism", icon: <FaCloudSun size={24} /> },
];

const Filters: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Tropical");

  return (
    <div 
    
    
    className="flex justify-center space-x-8 py-4 bg-white shadow-sm">
      {filters.map((filter) => (
        <div
          key={filter.label}
          className={`flex flex-col items-center cursor-pointer ${
            activeFilter === filter.label
              ? "text-black font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveFilter(filter.label)}
        >
          <div className="mb-1">{filter.icon}</div>
          <span className="text-sm">{filter.label}</span>
          {activeFilter === filter.label && (
            <div className="mt-1 w-6 border-b-2 border-black"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
