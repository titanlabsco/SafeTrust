import React from "react";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-inter">
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
