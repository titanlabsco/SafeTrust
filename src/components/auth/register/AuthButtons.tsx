import { FaGithub } from "react-icons/fa";

const AuthButtons = () => {
  return (
    <div className="flex flex-col space-y-3">
      <button className="flex items-center justify-center w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition text-base">
        <FaGithub className="mr-2" /> Sign up with GitHub
      </button>
    </div>
  );
};

export default AuthButtons;
