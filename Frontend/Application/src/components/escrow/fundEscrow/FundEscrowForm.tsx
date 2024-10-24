"use client";

import React, { useState } from "react";
import { fundEscrow } from "@/services/escrow/fundEscrow";
import { kit } from "@/wallet/walletKit";
import EscrowForm from "@/components/escrow/fundEscrow/EscrowForm";
import Header from "@/layouts/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/layouts/Loader";
import { useLoader } from "@/hooks/useLoader";

const initialFormValues = {
  contractId: "",
  engagementId: "",
};

const FundEscrowForm: React.FC = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const { loading, startLoading, stopLoading } = useLoader();
  const [statusMessage] = useState<string | null>(null);

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

    try {
      const { address } = await kit.getAddress();

      const payload = {
        contractId: formValues.contractId,
        engagementId: formValues.engagementId,
        signer: address,
      };

      console.log("Payload enviado:", payload);

      await fundEscrow(payload);

      toast.success("Escrow funded successfully!");
      toast.info("The data is located in the browser console");

      setFormValues(initialFormValues);
    } catch (error) {
      console.error("Error funding escrow:", error);
      toast.error("Error funding escrow. Please try again.");
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
        <h2 className="text-2xl text-black font-semibold mb-4">Fund Escrow</h2>

        {loading ? (
          <Loader />
        ) : (
          <EscrowForm
            formValues={formValues}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            statusMessage={statusMessage}
          />
        )}
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default FundEscrowForm;
