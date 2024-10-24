import React from "react";
import Image from "next/image";

const SecondaryImages: React.FC = () => {
  return (
    <div className="grid grid-rows-2 gap-2 h-[20rem]">
      <Image
        src="/img/house2.jpg"
        alt="Secondary"
        width={400}
        height={250}
        className="rounded-lg w-full h-[10rem] object-cover"
      />
      <Image
        src="/img/house3.jpg"
        alt="Secondary"
        width={400}
        height={250}
        className="rounded-lg w-full h-[10rem] object-cover"
      />
    </div>
  );
};

export default SecondaryImages;
