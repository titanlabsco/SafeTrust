"use client";

import React from "react";
import ImageSection from "@/components/escrow/status/ImageSection";
import TitleSection from "@/components/escrow/status/TitleSection";
import StatusSection from "@/components/escrow/status/StatusSection";
import Header from "@/layouts/Header";

const Status: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gray-100 mt-6 p-6">
        <div className="w-full max-w-4xl mx-auto">
          <ImageSection />
          <TitleSection />
          <StatusSection />
        </div>
      </div>
    </div>
  );
};

export default Status;
