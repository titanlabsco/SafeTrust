import React, { useEffect, useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { FaUser } from "react-icons/fa";

interface Reservation {
  wallet: string;
  date: string;
}

const Offers: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const savedReservations = JSON.parse(
      localStorage.getItem("reservations") || "[]",
    );
    setReservations(savedReservations);
  }, []);

  return (
    <div className="max-w-4xl w-full p-6 rounded-lg">
      <h1 className="text-3xl text-black font-semibold mb-2">
        Puerto Viejo House
      </h1>
      <p className="text-black text-lg mb-4">
        130 km away · 2 bedrooms · 2 beds · 1 bathroom
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
            {reservations.map((reservation, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6 flex items-center">
                  <FaUser className="mr-2" /> {reservation.wallet}
                </td>
                <td className="py-3 px-6">{reservation.date}</td>
                <td className="py-3 px-6 flex space-x-2">
                  <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
                    <SlLike />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600">
                    <SlDislike />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Offers;
