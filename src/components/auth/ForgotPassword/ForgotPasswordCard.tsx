'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgPassword } from 'react-icons/cg';

const ForgotPasswordCard: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reset password for:', email);
  };
  // forgot password card
  return (
    <>
      <div className="fixed left-0 bottom-0 hidden md:block dark:bg-dark-surface">
        <Image
          src="/img/apartments 4.png"
          alt="City Background Left"
          width={450}
          height={250}
          className="object-contain"
          priority
        />
      </div>

      <div className="fixed right-0 bottom-0 hidden md:block">
        <Image
          src="/img/apartments 3.png"
          alt="City Background Right"
          width={450}
          height={250}
          className="object-contain"
          priority
        />
      </div>

      <div className="w-[90%] md:w-[440px] px-4 md:px-0">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <CgPassword size={32} />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-black dark:text-gray-200">
            Forgot password?
          </h1>
          <p className="text-gray-500 text-center mt-2 text-sm md:text-base dark:text-gray-200">
            No worries, we'll send you a temporary password\
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-0 py-2 border-0 border-b border-gray-300 bg-transparent text-black focus:outline-none focus:ring-0 focus:border-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-[180px] mx-auto block bg-[#F47521] text-white py-2 rounded-lg hover:bg-orange-600 transition-colors dark:text-gray-200"
          >
            Send password
          </button>

          <div className="text-center">
            <Link
              href="/auth/login"
              className="text-black text-sm inline-flex items-center justify-center gap-2 dark:text-gray-200"
            >
              <span className="text-orange-500 relative top-[-1px]">←</span>{' '}
              Back to log in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordCard;
