import React from "react";

const ReservationCard: React.FC = () => {
  return (
    <div className="bg-white mb-16 p-4 rounded-lg shadow-2xl w-full col-start-3 row-start-2 mt-[-4rem]">
      <div className="text-gray-800 mb-4">
        <span className="text-2xl font-semibold">$ 481 USD</span>
        <span className="text-sm"> / month</span>
        <p className="text-sm mt-1 text-gray-500">
          The first month you must give an additional deposit of the same amount
          as the rent.
        </p>
      </div>
      <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-md font-semibold text-lg">
        BOOK
      </button>
    </div>
  );
};

export default ReservationCard;
