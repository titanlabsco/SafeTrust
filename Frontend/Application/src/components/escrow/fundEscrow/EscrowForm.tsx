"use client";

import React from "react";
import InputField from "./InputField";

interface EscrowFormProps {
  formValues: {
    contractId: string;
    engagementId: string;
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
        label="Contract ID"
        name="contractId"
        value={formValues.contractId}
        onChange={handleInputChange}
      />

      <InputField
        label="Engagement ID"
        name="engagementId"
        value={formValues.engagementId}
        onChange={handleInputChange}
      />

      <button
        type="submit"
        className="w-full bg-custom-orange text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
      >
        Fund Escrow
      </button>

      {statusMessage && (
        <p className="mt-4 text-center text-green-600">{statusMessage}</p>
      )}
    </form>
  );
};

export default EscrowForm;
