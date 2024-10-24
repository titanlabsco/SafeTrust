"use client";

import React, { useState } from "react";
import { setTrustline } from "@/services/escrow/trustline/trustline";
import Header from "@/layouts/Header";
import InputField from "@/components/escrow/fundEscrow/InputField";

const TrustlineForm: React.FC = () => {
  const [secretKey, setSecretKey] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecretKey(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    try {
      await setTrustline(secretKey);
      setStatusMessage("Trustline established successfully!");
    } catch (error) {
      console.error("Error setting trustline:", error);
      setStatusMessage("Error setting trustline. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
        <h2 className="text-2xl text-black font-semibold mb-4">
          Set Trustline
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputField
            label="Source Secret Key"
            name="sourceSecretKey"
            value={secretKey}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full bg-custom-orange text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            Set Trustline
          </button>

          {statusMessage && (
            <p className="mt-4 text-center text-red-500">{statusMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default TrustlineForm;
