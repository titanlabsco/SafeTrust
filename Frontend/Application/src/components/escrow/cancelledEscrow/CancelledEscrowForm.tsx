"use client";

import React, { useState } from "react";
import { cancelEscrow } from "@/services/escrow/cancelEscrow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/layouts/Loader";
import { useLoader } from "@/hooks/useLoader";

const initialFormValues = {
  contractId: "",
  engagementId: "",
  serviceProvider: "",
};

const FormComponent: React.FC = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const { loading, startLoading, stopLoading } = useLoader();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startLoading();

    const payload = {
      contractId: formValues.contractId,
      engagementId: formValues.engagementId,
      serviceProvider: formValues.serviceProvider,
    };

    try {
      const data = await cancelEscrow(payload);

      if (data?.status === "SUCCESS") {
        toast.success("Escrow cancelled successfully!");
        setFormValues(initialFormValues);
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
      stopLoading();
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-black text-left">
        Cancel Escrow
      </h2>

      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">Contract ID</label>
            <input
              type="text"
              name="contractId"
              value={formValues.contractId}
              onChange={handleInputChange}
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">
              Engagement ID
            </label>
            <input
              type="text"
              name="engagementId"
              value={formValues.engagementId}
              onChange={handleInputChange}
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-black mb-1">
              Service Provider
            </label>
            <input
              type="text"
              name="serviceProvider"
              value={formValues.serviceProvider}
              onChange={handleInputChange}
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded mt-4"
            disabled={loading}
          >
            {loading ? "Cancelling..." : "Cancel Escrow"}
          </button>
        </form>
      )}

      <ToastContainer position="top-right" />
    </div>
  );
};

export default FormComponent;
