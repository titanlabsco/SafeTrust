import React from "react";
import CountrySelect from "./CountrySelect";

const ProfileForm: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-black">
      <input
        type="text"
        placeholder="First Name"
        defaultValue="Randall"
        className="border border-gray-300 rounded-lg px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Surnames"
        defaultValue="Valenciano"
        className="border border-gray-300 rounded-lg px-4 py-2 text-black"
      />
      <div className="flex">
        <CountrySelect />
        <input
          type="text"
          placeholder="Phone"
          defaultValue="6498 6325"
          className="border-t border-r border-b border-gray-300 rounded-r-lg px-4 py-2 flex-grow text-black"
        />
      </div>
      <input
        type="text"
        placeholder="Location"
        defaultValue="Costa Rica, San José"
        className="border border-gray-300 rounded-lg px-4 py-2 text-black"
      />
    </div>
  );
};

export default ProfileForm;
