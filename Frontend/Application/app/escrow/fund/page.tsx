"use client";

import React from "react";
import FundEscrowForm from "@/components/escrow/fundEscrow/FundEscrowForm";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <FundEscrowForm />
    </div>
  );
};

export default Home;
