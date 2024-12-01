import React from "react";
import Header from "@/layouts/Header";
import PropertyList from "@/components/home/PropertyList";
import Sidebar from "@/layouts/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark-background min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <PropertyList />
        </div>
      </div>
    </div>
  );
};

export default Home;
