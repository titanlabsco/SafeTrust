import React from "react";
import Image from "next/image";

const ImageSection: React.FC = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden  mb-6">
      <Image
        src="/img/house5.jpg"
        alt="Apartment View"
        width={1000}
        height={300}
        className="w-full h-[15rem] object-cover"
      />
    </div>
  );
};

export default ImageSection;
