import React from "react";
import "./globals.css";
import { ClientProviders } from "@/providers/ClientProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-inter">
        <ClientProviders>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
