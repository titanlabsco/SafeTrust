import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const StatusSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Deposit status</h2>

      <div className="flex justify-between items-center">
        <p className="text-gray-600 leading-relaxed max-w-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>

        <div className="flex flex-col items-center">
          <h3 className="font-bold text-gray-800 mb-2">Status</h3>
          <BsCheckCircleFill className="text-green-500 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default StatusSection;
