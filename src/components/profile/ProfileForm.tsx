import React from "react";
import CountrySelect from "@/components/profile/CountrySelect";

const ProfileForm: React.FC = () => {
  const inputClasses = "border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-colors";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <input
        type="text"
        placeholder="First Name"
        defaultValue="Randall"
        className={inputClasses}
      />
      <input
        type="text"
        placeholder="Surnames"
        defaultValue="Valenciano"
        className={inputClasses}
      />
      <div className="flex">
        <CountrySelect />
        <input
          type="text"
          placeholder="Phone"
          defaultValue="6498 6325"
          className="border-t border-r border-b border-gray-300 dark:border-gray-700 rounded-r-lg px-4 py-2 flex-grow text-gray-900 dark:text-gray-100 bg-white dark:bg-dark-surface focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 transition-colors"
        />
      </div>
      <input
        type="text"
        placeholder="Location"
        defaultValue="Costa Rica, San José"
        className={inputClasses}
      />
    </div>
  );
};

export default ProfileForm;
