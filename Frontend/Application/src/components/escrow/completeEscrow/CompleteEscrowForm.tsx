"use client";

import React, { useState } from "react";
import { completeEscrow } from "@/services/escrow/completeEscrow";
import { kit } from "@/wallet/walletKit";
import Header from "@/layouts/Header";
import EscrowForm from "./EscrowForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompleteEscrowForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    contractId: "",
    engagementId: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { address } = await kit.getAddress();

      const payload = {
        contractId: formValues.contractId,
        engagementId: formValues.engagementId,
        signer: address,
      };

      console.log("Payload sent:", payload);

      await completeEscrow(payload);

      toast.success("Escrow completed successfully!");
    } catch (error) {
      console.error("Error completing escrow:", error);
      toast.error("Error completing escrow. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
        <h2 className="text-2xl text-black font-semibold mb-4">
          Complete Escrow
        </h2>
        <EscrowForm
          formValues={formValues}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default CompleteEscrowForm;
