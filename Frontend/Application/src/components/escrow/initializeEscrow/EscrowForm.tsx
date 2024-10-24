"use client";

import React from "react";
import InputField from "./InputField";

interface EscrowFormProps {
  formValues: {
    engagementId: string;
    description: string;
    serviceProvider: string;
    amount: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  statusMessage: string | null;
}

const EscrowForm: React.FC<EscrowFormProps> = ({
  formValues,
  handleInputChange,
  handleSubmit,
  statusMessage,
}) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <InputField
        label="Engagement ID"
        name="engagementId"
        value={formValues.engagementId}
        onChange={handleInputChange}
      />

      <InputField
        label="Description"
        name="description"
        value={formValues.description}
        onChange={handleInputChange}
      />

      <InputField
        label="Service Provider"
        name="serviceProvider"
        value={formValues.serviceProvider}
        onChange={handleInputChange}
      />

      <InputField
        label="Amount"
        name="amount"
        value={formValues.amount}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        className="w-full bg-custom-orange text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        Initialize Escrow
      </button>

      {statusMessage && (
        <p className="mt-4 text-center text-green-600">{statusMessage}</p>
      )}
    </form>
  );
};

export default EscrowForm;
