import { HiOutlineFire } from 'react-icons/hi2';
import { SlLocationPin } from 'react-icons/sl';
import { LuBedDouble, LuBath } from 'react-icons/lu';
import { LiaPawSolid } from 'react-icons/lia';
import IconBadge from '../IconBadge';

interface ApartmentDetailsProps {
  name: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  petFriendly: boolean;
  price: number;
}

export function ApartmentDetails({
  name,
  location,
  bedrooms,
  bathrooms,
  petFriendly,
  price,
}: ApartmentDetailsProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
        <div className="flex items-center">
          <IconBadge Icon={HiOutlineFire} />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 ml-2">
            {name}
          </h1>
        </div>
        <span className="text-gray-400 text-sm md:text-base">
          Interested people
        </span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-wrap gap-3 md:gap-4">
          <div className="flex items-center">
            <IconBadge Icon={SlLocationPin} />
            <span className="ml-1 text-sm md:text-base text-gray-600">
              {location}
            </span>
          </div>

          <div className="flex items-center">
            <IconBadge Icon={LuBedDouble} />
            <span className="ml-1 text-sm md:text-base text-gray-600">
              {bedrooms} bd.
            </span>
          </div>

          <div className="flex items-center">
            <IconBadge Icon={LuBath} />
            <span className="ml-1 text-sm md:text-base text-gray-600">
              {bathrooms} ba.
            </span>
          </div>

          {petFriendly && (
            <div className="flex items-center">
              <IconBadge Icon={LiaPawSolid} />
              <span className="ml-1 text-sm md:text-base text-gray-600">
                Pet friendly
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <span className="text-green-600 font-bold text-lg md:text-xl">
            ${price.toLocaleString()}
          </span>
          <span className="text-gray-500 text-sm md:text-base">Per month</span>
        </div>
      </div>
    </div>
  );
}

export default ApartmentDetails;
