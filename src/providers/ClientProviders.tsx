"use client";

import React from "react";
import { ApolloWrapper } from "@/providers/ApolloProviderWrapper";
import { AuthProvider } from "@/providers/AuthProvider";

export const ClientProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ApolloWrapper>
      <AuthProvider>{children}</AuthProvider>
    </ApolloWrapper>
  );
};
