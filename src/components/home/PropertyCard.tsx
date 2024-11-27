import React from 'react';
import Image from 'next/image';
import { FaBed, FaBath, FaPaw } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  promoted: boolean;
  beds: number;
  baths: number;
  petFriendly: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  address,
  price,
  promoted,
  beds,
  baths,
  petFriendly,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        {promoted && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
            PROMOTED
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-green-600 font-bold text-lg">${price}.00</p>
          <AiOutlineHeart className="text-gray-400 text-xl cursor-pointer hover:text-red-500" />
        </div>
        <p className="text-gray-500 text-sm">Per month</p>
        <h3 className="text-gray-900 font-semibold mt-2">{title}</h3>
        <p className="text-gray-600 text-sm">{address}</p>
      </div>
      <div className="p-4 border-t flex justify-between items-center text-gray-600 text-sm">
        <div className="flex items-center">
          <FaBed className="mr-1" />
          <span>{beds} bd</span>
        </div>
        <div className="flex items-center">
          <FaBath className="mr-1" />
          <span>{baths} ba</span>
        </div>
        {petFriendly && (
          <div className="flex items-center">
            <FaPaw className="mr-1" />
            <span>Pet Friendly</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
