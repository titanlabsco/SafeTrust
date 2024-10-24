"use client";

import React from "react";
import CompleteEscrowForm from "@/components/escrow/completeEscrow/CompleteEscrowForm";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <CompleteEscrowForm />
    </div>
  );
};

export default Home;
