"use client";

import React, { useEffect, useState } from "react";
import { kit } from "@/wallet/walletKit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/layouts/Loader";
import { useBookReservation } from "@/hooks/escrow/useBookReservation";
import { usePayReservation } from "@/hooks/escrow/usePayReservation";
import { useCancelReservation } from "@/hooks/escrow/useCancelReservation";

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

  const { bookReservation, loadingBook, isBooked, contractId, engagementId } =
    useBookReservation(address);
  const { payReservation, loadingPay, isPaid } = usePayReservation(
    address,
    contractId,
    engagementId,
  );
  const { cancelReservation, loadingCancel } = useCancelReservation(
    contractId,
    engagementId,
  );

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

      <div className="relative">
        <button
          onClick={bookReservation}
          className={`bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-md font-semibold text-lg ${
            isBooked || loadingBook ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isBooked || loadingBook}
        >
          {loadingBook ? <Loader /> : isBooked ? "BOOKED" : "BOOK"}
        </button>
      </div>

      {isBooked && (
        <button
          onClick={payReservation}
          className={`mt-4 bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-md font-semibold text-lg ${
            loadingPay || isPaid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loadingPay || isPaid}
        >
          {loadingPay ? <Loader /> : isPaid ? "PAID" : "Pay"}
        </button>
      )}

      {isBooked && (
        <button
          onClick={cancelReservation}
          className={`mt-4 bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-md font-semibold text-lg ${
            loadingCancel || isPaid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loadingCancel || isPaid}
        >
          {loadingCancel ? <Loader /> : "Cancel"}
        </button>
      )}

      <ToastContainer position="top-right" />
    </div>
  );
};

export default ReservationCard;
