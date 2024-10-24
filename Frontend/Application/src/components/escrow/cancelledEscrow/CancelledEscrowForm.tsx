"use client";

import React, { useState } from "react";
import { cancelEscrow } from "@/services/escrow/cancelEscrow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormComponent: React.FC = () => {
  const [contractId, setContractId] = useState("");
  const [engagementId, setEngagementId] = useState("");
  const [serviceProvider, setServiceProvider] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      contractId,
      engagementId,
      serviceProvider,
    };

    try {
      const data = await cancelEscrow(payload);

      if (data?.status === "SUCCESS") {
        toast.success("Escrow cancelled successfully!");
      } else {
        toast.error("Escrow cancellation failed!");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message || "An error occurred.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-black text-left">
        Cancel Escrow
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm text-black mb-1">Contract ID</label>
          <input
            type="text"
            value={contractId}
            onChange={(e) => setContractId(e.target.value)}
            className="w-full p-2 border text-black border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-black mb-1">Engagement ID</label>
          <input
            type="text"
            value={engagementId}
            onChange={(e) => setEngagementId(e.target.value)}
            className="w-full p-2 border text-black  border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-black mb-1">
            Service Provider
          </label>
          <input
            type="text"
            value={serviceProvider}
            onChange={(e) => setServiceProvider(e.target.value)}
            className="w-full p-2 border text-black border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-orange-500 text-white py-2 px-4 rounded mt-4 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Cancelling..." : "Cancel Escrow"}
        </button>
      </form>

      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default FormComponent;
