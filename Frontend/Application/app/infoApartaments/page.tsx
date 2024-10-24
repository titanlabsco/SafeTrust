import React from "react";
import Header from "@/layouts/Header";
import MainImage from "@/components/home/infoApartament/MainImage";
import SecondaryImages from "@/components/home/infoApartament/SecondaryImages";
import ReservationCard from "@/components/home/infoApartament/ReservationCard";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-col justify-center items-center pt-16">
        <div className="max-w-4xl w-full grid grid-cols-3 gap-2 mx-auto items-start">
          <MainImage />
          <SecondaryImages />
          <ReservationCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
