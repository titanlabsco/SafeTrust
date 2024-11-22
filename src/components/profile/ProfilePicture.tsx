import React from "react";

const ProfilePicture: React.FC = () => {
  return (
    <div className="relative w-24 h-24">
      <p>test</p>
      <img
        src="img/person.png"
        alt="Profile"
        className="w-full h-full rounded-full object-cover border border-gray-300"
      />
    </div>
  );
};

export default ProfilePicture;
