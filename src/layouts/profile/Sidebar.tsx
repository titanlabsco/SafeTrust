import React from "react";
import { FaUser, FaHome, FaUsers } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 border-r border-gray-300 pr-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">General</h2>
      <ul className="space-y-2">
        <li className="flex items-center text-orange-500 font-medium">
          <FaUser className="mr-2" /> Account
        </li>
      </ul>
      <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Other</h2>
      <ul className="space-y-2">
        <li className="flex items-center text-gray-800">
          <FaHome className="mr-2" /> Apartments
        </li>
        <li className="flex items-center text-gray-800">
          <FaUsers className="mr-2" /> Offers
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
