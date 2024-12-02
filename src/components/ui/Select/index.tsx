import { type ComponentProps, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface SelectProps extends ComponentProps<'select'> {
  variant?: 'default' | 'underlined';
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'w-full p-2 transition-colors text-gray-900',
          {
            'border rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500':
              variant === 'default',
            'border-b border-t-0 border-x-0 border-gray-400 focus:ring-0 focus:border-orange-500 bg-transparent appearance-none':
              variant === 'underlined',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Select.displayName = 'Select';
