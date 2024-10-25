"use client";

import React, { useState, useEffect } from "react";
import { kit } from "@/wallet/walletKit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReservationCard: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const { address } = await kit.getAddress();
        setAddress(address);
      } catch (error) {
        console.error("Error fetching wallet address:", error);
      }
    };

    fetchAddress();
  }, []);

  const handleBook = () => {
    if (!address) {
      toast.error("Please connect your wallet first");
      return;
    }

    const reservation = {
      wallet: address,
      date: new Date().toISOString().split("T")[0],
    };

    const existingReservations = JSON.parse(
      localStorage.getItem("reservations") || "[]"
    );
    const updatedReservations = [...existingReservations, reservation];
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));

    toast.success("Reservation successful!");
  };

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
      <button
        onClick={handleBook}
        className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-md font-semibold text-lg"
      >
        BOOK
      </button>

      {/* Contenedor del toast */}
      <ToastContainer />
    </div>
  );
};

export default ReservationCard;
