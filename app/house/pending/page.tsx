import React from "react";
import Header from "@/layouts/Header";
import PendingHeader from "@/layouts/house/pending/Header";
import Details from "@/components/house/pending/Details";
import Notes from "@/components/house/pending/Notes";
import Process from "@/components/house/pending/Process";

const Pending: React.FC = () => {
  return (
    <div className="bg-light-secondary dark:bg-dark-background min-h-screen">
      <Header />
      <div className="w-full bg-light-secondary dark:bg-dark-background px-10 py-8">
        <PendingHeader />
        <div className="grid grid-cols-12 gap-6">
          <Details />
          <div className="col-span-4">
            <Notes />
            <h3 className="text-lg font-bold text-light-primary dark:text-dark-primary">Process</h3>
            <Process />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pending;
