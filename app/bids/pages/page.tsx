import React from "react";
import MainHeader from "@/layouts/Header";
import SectionHeader from "@/layouts/PaidStateBidRequest/Header";
import Details from "@/components/bids/InvoiceDetails";
import Notes from "@/components/bids/NotesSection";
import Process from "@/components/bids/ProcessTimeline";

const PaidStateBidRequest: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Header Principal */}
      <MainHeader />
      <div className="px-10 py-8">
        {/* Encabezado de la sección */}
        <SectionHeader />
        <div className="grid grid-cols-12 gap-6">
          {/* Detalles */}
          <div className="col-span-8 bg-white shadow rounded p-4">
            <h2>Details Section</h2>
            <Details />
          </div>
          {/* Notas y Proceso */}
          <div className="col-span-4">
            <div className="bg-white shadow rounded p-4 mb-6">
              <h3 className="text-lg font-bold text-black">Notes</h3>
              <Notes />
            </div>
            <div className="bg-white shadow rounded p-4">
              <h3 className="text-lg font-bold text-black">Process</h3>
              <Process />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidStateBidRequest;
