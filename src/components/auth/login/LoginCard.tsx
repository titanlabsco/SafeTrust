import LoginForm from "./LoginForm";
import AuthButtons from "./AuthButtons";

const LoginCard = () => {
  return (
    <div
      className="flex justify-start items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/img/background.png")',
      }}
    >
      <div className="bg-white p-8 rounded-lg w-full max-w-md ml-20">
        <LoginForm />
        <div className="my-4 text-center text-gray-500">or</div>
        <AuthButtons />
        <p className="text-center text-black text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-orange-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
