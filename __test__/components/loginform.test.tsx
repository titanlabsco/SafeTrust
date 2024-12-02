import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '@/components/auth/login/LoginForm';
import '@testing-library/jest-dom';

describe('LoginForm Component', () => {
  it('renders all form elements', () => {
    render(<LoginForm />);

    // Check input fields
    expect(screen.getByLabelText(/Email or username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Check remember me checkbox
    expect(
      screen.getByRole('checkbox', { name: /Remember me/i })
    ).toBeInTheDocument();

    // Check forgot password link
    expect(
      screen.getByRole('link', { name: /Forgot your password\?/i })
    ).toHaveAttribute('href', '/auth/ForgotPassword');

    // Check submit button
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  it('allows entering email and password', () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/Email or username/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  it('can toggle remember me checkbox', () => {
    render(<LoginForm />);

    const rememberMeCheckbox = screen.getByRole('checkbox', {
      name: /Remember me/i,
    });

    expect(rememberMeCheckbox).not.toBeChecked();

    fireEvent.click(rememberMeCheckbox);

    expect(rememberMeCheckbox).toBeChecked();
  });
});
