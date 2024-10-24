"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import { cancelEscrow } from "@/services/escrow/cancelEscrow";

const FormComponent: React.FC = () => {
  const [contractId, setContractId] = useState("");
  const [engagementId, setEngagementId] = useState("");
  const [serviceProvider, setServiceProvider] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult("");

    const payload = {
      contractId,
      engagementId,
      serviceProvider,
    };

    try {
      const data = await cancelEscrow(payload);
      setResult("Escrow cancelled successfully: " + JSON.stringify(data));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-black text-center">
        Cancel Escrow
      </h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Contract ID"
          value={contractId}
          onChange={setContractId}
        />
        <InputField
          label="Engagement ID"
          value={engagementId}
          onChange={setEngagementId}
        />
        <InputField
          label="Service Provider"
          value={serviceProvider}
          onChange={setServiceProvider}
        />

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

      {result && (
        <>
          <p className="text-green-500 mt-4 text-center">{result}</p>
          {console.log(
            JSON.parse(result).status === "SUCCESS" ? "Success" : "Failed"
          )}
        </>
      )}

      {error && (
        <>
          <p className="text-red-500 mt-4 text-center">{error}</p>
          {console.log("Failed")}
        </>
      )}
    </div>
  );
};

export default FormComponent;
