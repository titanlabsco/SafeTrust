"use client";

import RegisterForm from "./RegisterForm";
import AuthButtons from "./AuthButtons";
import { useRouter } from "next/navigation";

const RegisterCard = () => {
  const router = useRouter();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/img/background.png')",
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Create your account <span className="ml-2">🚀</span>
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center">
        Welcome! Please provide your details to create a new account on the platform.
        </p>
        <RegisterForm />
        <div className="flex items-center justify-center my-4 text-gray-500 text-sm">
          <span>or</span>
        </div>
        <AuthButtons />
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            onClick={() => router.push("/auth/login")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;
