"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FiSearch, FiCalendar, FiTag } from 'react-icons/fi';
import { CgChevronDown } from "react-icons/cg";

export default function SearchAndFilter() {
    const [dateRangeOpen, setDateRangeOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const dateRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
                setDateRangeOpen(false);
            }
            if (statusRef.current && !statusRef.current.contains(event.target as Node)) {
                setStatusOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4 sm:mt-8">
            <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                    type="search"
                    placeholder="Search anything..."
                    className="w-full sm:w-2/3 lg:w-1/2 text-black placeholder:text-gray-500 py-2 pl-10 pr-4 
                             bg-white border border-gray-300 rounded-full shadow-sm
                             focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500
                             transition-colors duration-200"
                />
            </div>

            <div className="flex flex-row gap-2 sm:gap-3">
                <div className="relative flex-1 sm:flex-none" ref={dateRef}>
                    <button
                        onClick={() => setDateRangeOpen(!dateRangeOpen)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 
                                 text-gray-700 bg-white border border-gray-300 rounded-lg 
                                 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-500
                                 transition-colors duration-200"
                    >
                        <FiCalendar className="w-4 h-4" />
                        <span className="inline">Date range</span>
                        <CgChevronDown className="w-4 h-4" />
                    </button>
                    {dateRangeOpen && (
                        <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-150">Today</button></li>
                            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-150">Last 7 days</button></li>
                            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-150">Last 30 days</button></li>
                            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-150">Last 90 days</button></li>
                            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-150">Custom range</button></li>
                        </ul>
                    )}
                </div>

                <div className="relative flex-1 sm:flex-none" ref={statusRef}>
                    <button
                        onClick={() => setStatusOpen(!statusOpen)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 
                                 text-gray-700 bg-white border border-gray-300 rounded-lg 
                                 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-500
                                 transition-colors duration-200"
                    >
                        <FiTag className="w-4 h-4" />
                        <span className="inline">Status</span>
                        <CgChevronDown className="w-4 h-4" />
                    </button>
                    {statusOpen && (
                        <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-150">Active</button></li>
                            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-150">Pending</button></li>
                            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-150">Completed</button></li>
                            <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 transition-colors duration-150">Cancelled</button></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}