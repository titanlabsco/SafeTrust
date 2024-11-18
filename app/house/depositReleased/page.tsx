import React from "react";
import Header from "@/layouts/Header";
import PendingHeader from "@/layouts/house/depositReleased/Header";
import Details from "@/components/house/depositReleased/Details";
import Notes from "@/components/house/depositReleased/Notes";
import Process from "@/components/house/depositReleased/Process";

const DepostBlocked: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="w-full bg-gray-50 px-10 py-8">
        <PendingHeader />
        <div className="grid grid-cols-12 gap-6">
          <Details />
          <div className="col-span-4">
            <Notes />
            <h3 className="text-lg font-bold text-black">Process</h3>
            <Process />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepostBlocked;
