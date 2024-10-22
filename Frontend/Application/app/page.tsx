import React from "react";
import Header from "../src/layouts/Header";
import Filters from "../src/components/home/Filters";
import PropertyList from "../src/components/home/PropertyList";

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
