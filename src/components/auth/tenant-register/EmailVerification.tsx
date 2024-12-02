import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const EmailVerification: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Reload user to get latest email verification status
        await user.reload();
        if (user.emailVerified) {
          setIsVerified(true);
          // Wait a moment then redirect
          setTimeout(() => {
            navigate('/dashboard');
          }, 2000);
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>

      {isVerified ? (
        <div className="text-green-500">Email verified! Redirecting...</div>
      ) : (
        <div className="space-y-4">
          <p>Please check your email and click the verification link.</p>
          <p className="text-sm text-gray-500">
            Don't see the email? Check your spam folder.
          </p>
        </div>
      )}
    </div>
  );
};
