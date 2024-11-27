import Image from "next/image";

export function CityBackground() {
  return (
    <>
      <div className="fixed left-0 bottom-0 hidden md:block">
        <Image
          src="/img/apartments 4.png"
          alt="City Background Left"
          width={450}
          height={250}
          className="object-contain"
          priority
        />
      </div>

      <div className="fixed right-0 bottom-0 hidden md:block">
        <Image
          src="/img/apartments 3.png"
          alt="City Background Right"
          width={450}
          height={250}
          className="object-contain"
          priority
        />
      </div>
    </>
  );
}

