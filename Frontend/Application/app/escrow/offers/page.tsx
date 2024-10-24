"use client";

import React from "react";
import Offers from "@/components/escrow/offers/offers";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Offers />
    </div>
  );
};

export default Home;