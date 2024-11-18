import React from "react";
import countryData from "@/hooks/countryData";

interface CountrySelectProps {
  defaultValue?: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  defaultValue = "+506",
}) => {
  return (
    <select
      className="border border-gray-300 rounded-l-lg px-4 py-2 bg-gray-50 text-black"
      defaultValue={defaultValue}
    >
      {countryData.map((country) => (
        <option key={country.code} value={country.dial_code}>
          {country.flag} {country.dial_code}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
