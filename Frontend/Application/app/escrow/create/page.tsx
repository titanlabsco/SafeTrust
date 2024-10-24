"use client";

import React from "react";
import EscrowForm from "@/components/escrow/initializeEscrow/EscrowForm";
import InitializeEscrowForm from "@/components/escrow/initializeEscrow/InitializeEscrowForm";
import InputField from "@/components/escrow/initializeEscrow/InputField";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <InitializeEscrowForm />
      <EscrowForm
        formValues={{
          engagementId: "",
          description: "",
          serviceProvider: "",
          amount: "",
        }}
        handleInputChange={() => {}}
        handleSubmit={() => {}}
        statusMessage={null}
      />
      <InputField
        label="Sample Label"
        name="sampleInput"
        value=""
        onChange={() => {}}
      />
    </div>
  );
};

export default Home;
