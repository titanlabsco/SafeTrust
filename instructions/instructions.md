# User Registration Page Implementation Guide

## Problem Statement
We need to create a registration form that collects:
- Full name
- Phone number with country code
- Location (country selection)
- Email
- Password

The implementation should maintain consistent branding with city illustration.

## Solution
This is a suggested solution provided as an implementation guide.

### Component Structure
```
.
├── CONTRIBUTORS_GUIDELINE.md
├── GIT_GUIDELINE.md
├── README.md
├── app
│   ├── auth
│   │   ├── EmailVerification
│   │   ├── forgotPassword
│   │   └── login
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── house
│   │   ├── depositBlocked
│   │   ├── depositReleased
│   │   ├── page.tsx
│   │   ├── paid
│   │   └── pending
│   ├── layout.tsx
│   ├── page.tsx
│   └── profile
│       ├── my-apartments
│       └── page.tsx
├── codegen.ts
├── instructions
│   └── instructions.md
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   └── img
│       ├── Icon.svg
│       ├── apartments 3.png
│       ├── apartments 4.png
│       ├── apartments.png
│       ├── background.png
│       ├── house1.jpg
│       ├── logo.png
│       ├── logo2.png
│       └── person.png
├── src
│   ├── components
│   │   ├── auth
│   │   ├── home
│   │   ├── house
│   │   ├── map
│   │   └── profile
│   ├── config
│   │   ├── apollo.ts
│   │   └── firebase.ts
│   ├── features
│   │   └── auth
│   ├── graphql
│   │   ├── generated
│   │   └── queries
│   ├── hooks
│   │   ├── countryData.ts
│   │   ├── escrow
│   │   ├── house
│   │   └── useLoader.ts
│   ├── layouts
│   │   ├── Header.tsx
│   │   ├── Loader.tsx
│   │   ├── Sidebar.tsx
│   │   ├── house
│   │   └── profile
│   ├── providers
│   │   ├── ApolloProviderWrapper.tsx
│   │   ├── AuthProvider.tsx
│   │   └── ClientProviders.tsx
│   ├── services
│   │   └── escrow
│   ├── store
│   │   └── walletStore
│   ├── utils
│   │   └── handleAxiosError.ts
│   └── wallet
│       ├── hooks
│       └── walletKit.ts
├── tailwind.config.ts
└── tsconfig.json
```

### Main Component Implementation

```typescript
// src/features/auth/pages/Registration.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';

interface RegistrationForm {
  fullName: string;
  phoneNumber: string;
  countryCode: string;
  location: string;
  email: string;
  password: string;
}

export const Registration = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationForm>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate('/verify-email', { state: { email: data.email } });
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-1/2 p-8 flex flex-col">
        <img 
          src="/logo.svg" 
          alt="SafeTrust" 
          className="h-12 mb-12"
        />
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Form fields implementation */}
          {/* ... form fields ... */}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 disabled:opacity-50"
          >
            {isSubmitting ? 'Registering...' : 'Login'}
          </button>
        </form>
      </div>

      {/* Right side - Illustration */}
      <div className="w-1/2 bg-orange-500 relative overflow-hidden">
        <CityBackground className="absolute bottom-0 w-full" />
      </div>
    </div>
  );
};
```

### Phone Input Component

```typescript
// src/features/auth/components/PhoneInput/index.tsx
interface Props {
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneNumberChange: (number: string) => void;
}

export const PhoneInput: React.FC<Props> = ({
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange
}) => {
  return (
    <div className="flex gap-2">
      <div className="relative">
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className="w-24 p-3 pl-8 border rounded-md appearance-none"
        >
          <option value="+506">🇨🇷 +506</option>
        </select>
      </div>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => onPhoneNumberChange(e.target.value)}
        className="flex-1 p-3 border rounded-md"
        placeholder="74812445"
      />
    </div>
  );
};
```

## Design Requirements

### Colors
- Primary Button: `bg-orange-500`
- Button Hover: `bg-orange-600`
- Background: White/Orange split
- Input Focus: Ring orange

### Typography
- Labels: 14px, Medium
- Input Text: 16px, Regular
- Button Text: 16px, Medium

### Layout
- Split screen design
  - Left side: Form (50%)
  - Right side: Illustration (50%)
- Responsive layout

## Success Criteria
- [ ] Matches design mockup exactly
- [ ] Form validation working
- [ ] Phone input with country code
- [ ] Location selector implemented
- [ ] Password requirements enforced
- [ ] Error states handled
- [ ] Loading states implemented
- [ ] Firebase integration working
- [ ] Responsive design
- [ ] Accessible form inputs

## Additional Context
- Phone number format validation
- Password strength requirements
- Country code preselection
- Error message display
- Form state persistence
- Loading state during submission

## Related Issues
- #XX Firebase Auth Integration
- #XX Email Verification Flow

## Potential Enhancements
Would you like to add:
1. Password strength indicator?
2. Show form validation messages?
3. Add social login options?
4. Include phone number formatting?