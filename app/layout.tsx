"use client";
import React from "react";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-inter">
        <div className="min-h-screen flex flex-col">
          <MaterialThemeProvider>
            <ThemeProvider>
              <main className="flex-1 bg-light-primary dark:bg-dark-primary text-light-primary dark:text-dark-primary transition-colors">
                {children}
              </main>
            </ThemeProvider>
          </MaterialThemeProvider>
        </div>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
