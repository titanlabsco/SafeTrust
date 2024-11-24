"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { VerificationCodeInput } from "../../../src/features/auth/components/VerificationCodeInput";
import { CityBackground } from "../../../src/features/auth/components/CityBackground";

const EmailVerification = () => {
  const [isResending, setIsResending] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your-email@example.com";

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      console.log("Resending code to:", email);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error("Error resending code:", error);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
        <div className="max-w-md w-full space-y-8 text-center">
          <h1 className="text-3xl font-bold text-black">Check your E-mail</h1>
          <p className="text-black">
            Please check your email and type the code sent to{" "}
            <span className="font-medium">{email}</span>.
          </p>
          <VerificationCodeInput
            length={6}
            onComplete={(code) => console.log("Code entered:", code)}
          />
          <button
            onClick={handleResendCode}
            disabled={isResending}
            className="w-full py-3 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50"
          >
            {isResending ? "Sending..." : "Resend code"}
          </button>
        </div>
      </div>
      <CityBackground />
    </div>
  );
};
export default EmailVerification;