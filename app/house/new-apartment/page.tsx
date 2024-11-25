"use client";

import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";
import Bounded from "@/components/Bounded";
import FormNewApartment from "@/components/house/new-apartment/Form";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <Bounded title="New Apartment">
          <FormNewApartment />
        </Bounded>
      </div>
    </div>
  );
};

export default Home;
