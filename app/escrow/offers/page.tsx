"use client";

import React from "react";
import Offers from "@/components/escrow/offers/offers";
import Header from "@/layouts/Header";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex justify-center items-start py-16">
        <Offers />
      </div>
    </div>
  );
};

export default Home;
