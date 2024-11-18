import React from "react";
import Header from "@/layouts/Header";
import Sidebar from "@/layouts/house/Sidebar";
import PropertyDetails from "@/components/house/PropertyDetails";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <PropertyDetails />
        </div>
      </div>
    </div>
  );
};

export default Home;
