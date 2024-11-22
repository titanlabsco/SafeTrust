import React from "react";
import ForgotPasswordCard from "@/components/auth/forgot-password/ForgotPasswordCard";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <ForgotPasswordCard />
    </div>
  );
};

export default ForgotPasswordPage;