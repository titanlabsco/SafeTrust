const LoginForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Your password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button className="flex items-center justify-center w-full bg-custom-orange text-white py-3 rounded-md hover:bg-gray-700 transition text-base">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
