"use client";

import React from "react";
import CancelledEscrowForm from "@/components/escrow/cancelledEscrow/CancelledEscrowForm";
import Header from "@/layouts/Header";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <CancelledEscrowForm />
    </div>
  );
};

export default Home;
