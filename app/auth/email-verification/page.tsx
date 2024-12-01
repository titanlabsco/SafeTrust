"use client";

import { useState, Suspense, useEffect} from "react";
import { useSearchParams } from "next/navigation";
import { VerificationCodeInput } from "../../../src/components/auth/VerificationCodeInput";
import { CityBackground } from "../../../src/components/auth/CityBackground";
import { GraphQLClient } from "graphql-request";

const EmailVerificationForm = () => {
  const [isResending, setIsResending] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "josuemarin2009@hotmail.com";
  const graphQLClient = new GraphQLClient("http://localhost:8080/v1/graphql", {
    headers: {
      "x-hasura-admin-secret": "myadminsecretkey", 
    },
  });
  
  const [message, setMessage] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');

  type SendVerificationCodeResponse = {
    sendVerificationCode: {
      success: boolean;
      message: string;
      expiresAt: string;
    };
  };  

  const handleResendCode = async () => {
    setIsResending(true);
    setMessage('');  
  
    try {
      const mutation = `
        mutation SendVerificationCode($email: String!) {
          sendVerificationCode(input: { email: $email }) {
            success
            message
            expiresAt
          }
        }
      `;
      const variables = { email };
  
      const data = await graphQLClient.request<SendVerificationCodeResponse>(mutation, variables);
  
      if (data.sendVerificationCode.success) {
        setMessage("Verification code sent successfully.");
      } else {
        setMessage(data.sendVerificationCode.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error resending code:", error);
      setMessage("Failed to resend verification code.");
    } finally {
      setIsResending(false);
    }
  };
  
  useEffect(() => {
    if (verificationCode) {
      handleVerifyCode(); 
    }
  }, [verificationCode]);  
  

  type VerifyEmailCodeResponse = {
    verifyEmailCode: {
      success: boolean;
      message: string;
    };
  };
  
  const handleVerifyCode = async () => {
    if (!verificationCode) {
        setMessage("Please enter the verification code.");
        return;
    }

    setMessage(''); 

    try {
        const mutation = `
            mutation VerifyEmailCode($email: String!, $code: String!) {
                verifyEmailCode(input: { email: $email, code: $code }) {
                    success
                    message
                }
            }
        `;
        const variables = { email, code: verificationCode };

        const data = await graphQLClient.request<VerifyEmailCodeResponse>(mutation, variables);

        console.log(data);

        if (data.verifyEmailCode.success) {
            setMessage("Email verified successfully.");
        }
    } catch (error: any) {

      setMessage(error.response.errors[0].message);
      console.log(error.response.errors[0].message);
    }
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
      <div className="flex flex-col items-center justify-center p-4 z-10">
        <div className="max-w-lg w-full space-y-8 text-center">
          <h1 className="text-3xl font-bold text-black">Check your E-mail</h1>
          <p className="text-black">
            Please check your email and type the code sent to{" "}
            <span className="font-medium">{email}</span>.
          </p>
          <VerificationCodeInput
            length={6}
            onComplete={(code) => {
              setVerificationCode(code);
            }}
          />

          {/* Message here */}
        {message && (
          <p className="text-lg font-medium text-black-250 mt-4">{message}</p>
        )}

          <button
            onClick={handleResendCode}
            disabled={isResending}
            className="w-full py-3 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50"
          >
            {isResending ? "Sending..." : "Resend code"}
          </button>
        </div>
      </div>
    </div>
  );
};

const EmailVerificationContent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
      <Suspense fallback={<div>Loading...</div>}>
        <EmailVerificationForm />
      </Suspense>
      <CityBackground />
    </div>
  );
};

export default EmailVerificationContent;
