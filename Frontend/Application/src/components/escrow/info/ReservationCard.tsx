"use client";

import React, { useState, useEffect } from "react";
import { kit } from "@/wallet/walletKit";
import { initializeEscrow } from "@/services/escrow/initializeEscrow";
import { fundEscrow } from "@/services/escrow/fundEscrow";
import { cancelEscrow } from "@/services/escrow/cancelEscrow";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/layouts/Loader";

const ReservationCard: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  const [isPaid, setIsPaid] = useState(false); // New state to track if the payment has been made
  const [contractId, setContractId] = useState<string | null>(null);
  const [engagementId, setEngagementId] = useState<string | null>(null);

  const [loadingBook, setLoadingBook] = useState(false);
  const [loadingPay, setLoadingPay] = useState(false);
  const [loadingCancel, setLoadingCancel] = useState(false);

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

  const handleBook = async () => {
    if (!address) {
      toast.error("Please connect your wallet first");
      return;
    }

    setLoadingBook(true);

    const payload = {
      engagementId: "Puerto Viejo House",
      description: "130 km away · 2 bedrooms · 2 beds · 1 bathroom",
      serviceProvider:
        "GCEM4QSKQ42YJHE2MZG5JNIMG3T7ONLICYNXIN7HRSMREDVO2KUW3JNL",
      amount: "1",
      signer: address,
    };

    try {
      const response = await initializeEscrow(payload);
      const { contract_id, engagement_id } = response;

      setContractId(contract_id);
      setEngagementId(engagement_id);

      toast.success("Reservation made successfully!");
      toast.warning("Pending payment");

      const reservation = {
        wallet: address,
        date: new Date().toISOString().split("T")[0],
      };
      const existingReservations = JSON.parse(
        localStorage.getItem("reservations") || "[]"
      );
      localStorage.setItem(
        "reservations",
        JSON.stringify([...existingReservations, reservation])
      );

      setIsBooked(true);
    } catch (error) {
      console.error("Error booking the apartment:", error);
      toast.error("Error booking the apartment. Please try again.");
    } finally {
      setLoadingBook(false);
    }
  };

  const handlePay = async () => {
    if (!contractId || !engagementId) {
      toast.error("Missing contract or engagement details");
      return;
    }

    setLoadingPay(true);

    const payload = {
      contractId,
      engagementId,
      signer: address as string,
    };

    try {
      await fundEscrow(payload);
      toast.success("Payment made successfully!");
      setIsPaid(true); // Mark payment as successful
    } catch (error) {
      console.error("Error when paying:", error);
      toast.error("Error when paying. Please try again.");
    } finally {
      setLoadingPay(false);
    }
  };

  const handleCancel = async () => {
    if (!contractId || !engagementId) {
      toast.error("Missing contract or engagement details");
      return;
    }

    setLoadingCancel(true);

    const payload = {
      contractId,
      engagementId,
      serviceProvider:
        "GCEM4QSKQ42YJHE2MZG5JNIMG3T7ONLICYNXIN7HRSMREDVO2KUW3JNL",
    };

    try {
      const data = await cancelEscrow(payload);

      if (data?.status === "SUCCESS") {
        toast.success("Rent canceled successfully!");
        setIsBooked(false);
      } else {
        toast.error("Rent cancellation failed!");
      }
    } catch (error) {
      console.error("Rent could not be cancelled:", error);
      toast.error("Rent could not be cancelled. Please try again.");
    } finally {
      setLoadingCancel(false);
    }
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

      <div className="relative">
        <button
          onClick={handleBook}
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
          onClick={handlePay}
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
          onClick={handleCancel}
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
