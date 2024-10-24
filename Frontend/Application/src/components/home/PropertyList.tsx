"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PropertyCard from "./PropertyCard";

interface Property {
  image: string;
  title: string;
  distance: string;
  price: string;
}

const properties: Property[] = [
  {
    image: "/img/house1.jpg",
    title: "Puerto Viejo House",
    distance: "130 km away",
    price: "481",
  },
  {
    image: "/img/house2.jpg",
    title: "Puerto Viejo House",
    distance: "130 km away",
    price: "481",
  },
  {
    image: "/img/house3.jpg",
    title: "Puerto Viejo House",
    distance: "130 km away",
    price: "481",
  },
  {
    image: "/img/house4.jpg",
    title: "Puerto Viejo House",
    distance: "130 km away",
    price: "481",
  },
  {
    image: "/img/house5.jpg",
    title: "Puerto Viejo House",
    distance: "130 km away",
    price: "481",
  },
  {
    image: "/img/house6.jpg",
    title: "Puerto Viejo House",
    distance: "130 km away",
    price: "481",
  },
  {
    image: "/img/house4.jpg",
    title: "Puerto Viejo House",
    distance: "130 km away",
    price: "481",
  },
  {
    image: "/img/house5.jpg",
    title: "Puerto Viejo House",
    distance: "130 km away",
    price: "481",
  },
];

const PropertyList: React.FC = () => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/infoApartaments");
  };

  return (
    <div className="grid grid-cols-4 gap-6 p-8">
      {properties.map((property, index) => (
        <div
          key={index}
          onClick={handleCardClick}
          className="transform transition-transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out cursor-pointer"
        >
          <PropertyCard
            image={property.image}
            title={property.title}
            distance={property.distance}
            price={property.price}
          />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
