import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const TitleSection: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">Puerto Viejo House</h1>
      <FaInfoCircle className="text-gray-500 text-2xl cursor-pointer" />
    </div>
  );
};

export default TitleSection;
