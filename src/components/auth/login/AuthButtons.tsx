import { FcGoogle } from 'react-icons/fc';
import { FaWallet } from 'react-icons/fa'; 

const AuthButtons = () => {
  return (
    <div className="space-y-2">
      <button
        type="button"
        className="w-full py-2 px-4 border text-black border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100"
      >
        <FcGoogle className="w-5 h-5 mr-2" />
        Login with Google
      </button>
      <button
        type="button"
        className="w-full py-2 px-4 bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800"
      >
        <FaWallet className="w-5 h-5 mr-2" />
        Login with Wallet
      </button>
    </div>
  );
};

export default AuthButtons;
