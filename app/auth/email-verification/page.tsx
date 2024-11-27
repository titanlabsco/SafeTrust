'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { VerificationCodeInput } from '../../../src/components/auth/VerificationCodeInput';
import { CityBackground } from '../../../src/components/auth/CityBackground';

const EmailVerificationForm = () => {
  const [isResending, setIsResending] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || 'your-email@example.com';

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      console.log('Resending code to:', email);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error resending code:', error);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative">
      <div className="flex flex-col items-center justify-center p-4 z-10">
        <div className="max-w-lg w-full space-y-8 text-center">
          <h1 className="text-3xl font-bold text-black">Check your E-mail</h1>
          <p className="text-black">
            Please check your email and type the code sent to{' '}
            <span className="font-medium">{email}</span>.
          </p>
          <VerificationCodeInput
            length={6}
            onComplete={(code) => console.log('Code entered:', code)}
          />
          <button
            onClick={handleResendCode}
            disabled={isResending}
            className="w-full py-3 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50"
          >
            {isResending ? 'Sending...' : 'Resend code'}
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
