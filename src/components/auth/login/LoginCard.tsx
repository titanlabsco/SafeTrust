import LoginForm from "./LoginForm";
import AuthButtons from "./AuthButtons";

const LoginCard = () => {
  return (
    <div className="flex justify-center lg:justify-start items-center min-h-screen bg-white lg:bg-[url('/img/background.png')] bg-cover bg-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md lg:ml-20">
        <LoginForm />
        <div className="my-4 text-center text-gray-500">or</div>
        <AuthButtons />
        <p className="text-center text-black text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/auth/tenant-register" className="text-orange-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
