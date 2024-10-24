import React from "react";

interface EscrowFormProps {
  formValues: {
    contractId: string;
    engagementId: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const EscrowForm: React.FC<EscrowFormProps> = ({
  formValues,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-black text-sm mb-2">Contract ID</label>
        <input
          type="text"
          name="contractId"
          value={formValues.contractId}
          onChange={handleInputChange}
          className="w-full p-2 border text-black border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-black text-sm mb-2">Engagement ID</label>
        <input
          type="text"
          name="engagementId"
          value={formValues.engagementId}
          onChange={handleInputChange}
          className="w-full p-2 border text-black border-gray-300 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 px-4 rounded mt-4 hover:bg-orange-600"
      >
        Complete Escrow
      </button>
    </form>
  );
};

export default EscrowForm;
