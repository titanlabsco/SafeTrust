"use client";

interface Props {
  className?: string;
}

export const CityBackground: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`absolute bottom-0 w-full bg-no-repeat bg-contain ${className}`}
      style={{
        backgroundImage: "url('/img/apartments.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "80vh",
      }}
    ></div>
  );
};
