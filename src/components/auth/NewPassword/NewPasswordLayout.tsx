'use client';

import React from 'react';
import { CityBackground } from './CityBackground';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NewPasswordLayoutProps {
  children: React.ReactNode;
}

export function NewPasswordLayout({ children }: NewPasswordLayoutProps) {
  return (
    <div className="bg-gray-50 dark:bg-dark-surface min-h-screen flex items-center justify-center">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <CityBackground />
      <div className="w-[90%] md:w-[440px] px-4 md:px-0">{children}</div>
    </div>
  );
}
