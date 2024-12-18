'use client';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/house/Sidebar';
import PropertyDetails from '@/components/house/PropertyDetails';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100 dark:bg-dark-background min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row justify-center">
        <div
          className={`fixed lg:static z-50 top-0 left-0 lg:w-1/5 bg-white dark:bg-dark-surface h-full shadow-lg transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform lg:translate-x-0`}
        >
          <Sidebar />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        <div className="flex-grow lg:w-[75%] max-w-[1200px] mx-auto p-4">
          <button
            className="lg:hidden bg-orange-500 text-white px-4 py-2 rounded-lg mb-4 flex items-center justify-center"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
          <PropertyDetails />
        </div>
      </div>
    </div>
  );
};

export default Home;
