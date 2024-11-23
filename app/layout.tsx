"use client"
import React from "react";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-inter">
        <div className="min-h-screen flex flex-col">
          <ThemeProvider><main className="flex-1">{children}</main></ThemeProvider>
        </div>
      </body>
    </html>
  );
}
