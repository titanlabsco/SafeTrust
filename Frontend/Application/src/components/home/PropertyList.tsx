import React from "react";
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
    distance: "A 130 km de distancia",
    price: "481",
  },
  {
    image: "/img/house2.jpg",
    title: "Puerto Viejo House",
    distance: "A 130 km de distancia",
    price: "481",
  },
  {
    image: "/img/house3.jpg",
    title: "Puerto Viejo House",
    distance: "A 130 km de distancia",
    price: "481",
  },
  {
    image: "/img/house4.jpg",
    title: "Puerto Viejo House",
    distance: "A 130 km de distancia",
    price: "481",
  },
  {
    image: "/img/house5.jpg",
    title: "Puerto Viejo House",
    distance: "A 130 km de distancia",
    price: "481",
  },
  {
    image: "/img/house6.jpg",
    title: "Puerto Viejo House",
    distance: "A 130 km de distancia",
    price: "481",
  },
  {
    image: "/img/house4.jpg",
    title: "Puerto Viejo House",
    distance: "A 130 km de distancia",
    price: "481",
  },
  {
    image: "/img/house5.jpg",
    title: "Puerto Viejo House",
    distance: "A 130 km de distancia",
    price: "481",
  },
];

const PropertyList: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-8">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          image={property.image}
          title={property.title}
          distance={property.distance}
          price={property.price}
        />
      ))}
    </div>
  );
};

export default PropertyList;
