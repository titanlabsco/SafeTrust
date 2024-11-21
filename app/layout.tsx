"use client";

import React from "react";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/config/apollo";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-inter">
        <ApolloProvider client={client}>
            <div className="min-h-screen flex flex-col">
              <main className="flex-1">{children}</main>
            </div>
        </ApolloProvider>
      </body>
    </html>
  );
}
