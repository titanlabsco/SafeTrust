import Image from 'next/image';
import { CgPassword } from 'react-icons/cg';

interface PasswordHeaderProps {
  title: string;
  subtitle: string;
}

export function PasswordHeader({ title, subtitle }: PasswordHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
        <CgPassword size={32} />
      </div>
      <h1 className="text-xl md:text-2xl font-bold text-black dark:text-gray-200">
        {title}
      </h1>
      <p className="text-gray-500 text-center mt-2 text-sm md:text-base dark:text-gray-200">
        {subtitle}
      </p>
    </div>
  );
}
