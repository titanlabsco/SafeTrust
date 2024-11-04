import React from "react";
import Image from "next/image";

const MainImage: React.FC = () => {
  return (
    <div className="col-span-2">
      <Image
        src="/img/house1.jpg"
        alt="Main"
        width={800}
        height={500}
        className="rounded-lg w-full h-[20rem] object-cover"
      />
      <div className="mt-4">
        <h2 className="text-2xl text-black font-bold">Puerto Viejo House</h2>
        <p className="text-gray-500">
          130 km away · 2 bedrooms · 2 beds · 1 bathroom
        </p>
      </div>
    </div>
  );
};

export default MainImage;
