import { type ComponentProps, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends ComponentProps<'input'> {
  variant?: 'default' | 'underlined';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full p-2 transition-colors placeholder:text-gray-500 text-gray-900',
          {
            'border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500':
              variant === 'default',
            'border-b border-t-0 border-x-0 border-gray-400 focus:ring-0 focus:border-orange-500 bg-transparent':
              variant === 'underlined',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
