import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FaUser } from "react-icons/fa";

const Offers: React.FC = () => {
  return (
    <div className="max-w-4xl w-full  p-6 rounded-lg ">
      <h1 className="text-3xl text-black font-semibold mb-2">
        Puerto Viejo House
      </h1>
      <p className="text-black text-lg mb-4">
        A 130 km de distancia · 2 habitaciones · 2 camas · 1 baño
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-6 text-left">Wallet</th>
              <th className="py-3 px-6 text-left">Reservation Date</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            <tr className="border-b hover:bg-gray-100">
              <td className="py-3 px-6 flex items-center">
                <FaUser className="mr-2" /> QXSZ...23S
              </td>
              <td className="py-3 px-6">2024-10-25</td>
              <td className="py-3 px-6 flex space-x-2">
                <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
                  <SlLike />
                </button>
                <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
                  <SlDislike />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Offers;
