import React from "react";
import { CityBackground } from "./CityBackground";

interface NewPasswordLayoutProps {
  children: React.ReactNode;
}

export function NewPasswordLayout({ children }: NewPasswordLayoutProps) {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <CityBackground />
      <div className="w-[90%] md:w-[440px] px-4 md:px-0">{children}</div>
    </div>
  );
}
