import React from "react";
import Header from "@/layouts/Header";
import PendingHeader from "@/layouts/house/pending/Header";
import Details from "@/components/house/pending/Details";
import Notes from "@/components/house/pending/Notes";
import Process from "@/components/house/pending/Process";

const Pending: React.FC = () => {
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

export default Pending;
