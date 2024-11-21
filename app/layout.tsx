"use client";

import React from "react";
import "./globals.css";
import { ApolloWrapper } from "@/ApolloProviderWrapper";
import { AuthProvider } from "@/providers/AuthProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-inter">
        <ApolloWrapper>
        <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <main className="flex-1">{children}</main>
            </div>
        </AuthProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
