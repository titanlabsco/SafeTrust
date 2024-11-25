"use client";

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  sendEmailVerification 
} from 'firebase/auth';
import { useMutation } from '@apollo/client';
import { ASSIGN_TENANT_ROLE, CREATE_USER_RECORD } from '@graphql/queries/userMutations.graphql';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

export const TenantRegistration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  const [assignRole] = useMutation(ASSIGN_TENANT_ROLE);
  const [createUser] = useMutation(CREATE_USER_RECORD);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      // 1. Create Firebase user
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      // 2. Send email verification
      await sendEmailVerification(user);
      
      // 3. Create user record in our database
      await createUser({
        variables: {
          user: {
            id: user.uid,
            email: user.email,
          }
        }
      });
      
      // 4. Assign tenant role
      await assignRole({
        variables: {
          userId: user.uid
        }
      });
      
      // 5. Redirect to verification page
      router.push('/verify-email');
      
    } catch (error) {
      setError(getErrorMessage(error));
    }
  };
  
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Register as Tenant
      </h1>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            minLength={6}
            required
          />
          {password.length >= 6 && <PasswordStrengthIndicator password={password} />}
          {password.length > 0 && password.length < 6 && (
            <p style={{ color: "red" }}>Password must be at least 6 characters long.</p>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

// Helper function to parse Firebase errors
const getErrorMessage = (error: any): string => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'This email is already registered';
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/operation-not-allowed':
      return 'Email/password accounts are not enabled';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    default:
      return 'An error occurred during registration';
  }
};