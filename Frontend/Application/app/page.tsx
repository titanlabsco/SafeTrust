import React from "react";
import Header from "@/layouts/Header";
import Filters from "@/components/home/Filters";
import PropertyList from "@/components/home/PropertyList";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Filters />
      <PropertyList />
    </div>
  );
};

export default Home;
