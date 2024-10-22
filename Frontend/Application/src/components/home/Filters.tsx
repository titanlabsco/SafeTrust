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
  { label: "Vista increíble", icon: <FaTree size={24} /> },
  { label: "Cuevas", icon: <FaMountain size={24} /> },
  { label: "Mansiones", icon: <MdOutlineVilla size={24} /> },
  { label: "Albercas increíbles", icon: <MdOutlinePool size={24} /> },
  { label: "Cabañas", icon: <FaHome size={24} /> },
  { label: "Frente a la playa", icon: <FaUmbrellaBeach size={24} /> },
  { label: "En el campo", icon: <FaTree size={24} /> },
  { label: "Misticismo", icon: <FaCloudSun size={24} /> },
];

const Filters: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("Tropical");

  return (
    <div className="flex justify-center space-x-8 py-4 bg-white shadow-sm">
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
