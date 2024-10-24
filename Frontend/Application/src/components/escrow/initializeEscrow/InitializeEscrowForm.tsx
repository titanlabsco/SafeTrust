"use client";

import React, { useState } from "react";
import { initializeEscrow } from "@/services/escrow/initializeEscrow";
import { kit } from "@/wallet/walletKit";
import EscrowForm from "./EscrowForm";
import Header from "@/layouts/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InitializeEscrowForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    engagementId: "",
    description: "",
    serviceProvider: "",
    amount: "",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    try {
      const { address } = await kit.getAddress();

      const payload = {
        ...formValues,
        signer: address,
      };

      console.log("Payload enviado:", payload);

      await initializeEscrow(payload);

      toast.success("Escrow initialized successfully!");
    } catch (error) {
      console.error("Error initializing escrow:", error);
      toast.error("Error initializing escrow. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
        <h2 className="text-2xl text-black font-semibold mb-4">
          Create an Apartment
        </h2>
        <EscrowForm
          formValues={formValues}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          statusMessage={statusMessage}
        />
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default InitializeEscrowForm;
