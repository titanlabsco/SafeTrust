"use client"
import React, { useState, useRef, useEffect } from 'react';
import { CgChevronDown } from 'react-icons/cg';
import Pagination from '../Pagination';
import { DropdownPaginationProps } from '@/types/table';

const DropdownPagination: React.FC<DropdownPaginationProps> = ({
    paginationVisible,
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems,
    onItemsPerPageChange,
    onPageChange
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const showing = Math.min((currentPage * itemsPerPage), totalItems);
    const startItem = Math.min(((currentPage - 1) * itemsPerPage) + 1, totalItems);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleItemsPerPageChange = (value: number) => {
        onItemsPerPageChange(value);
        setDropdownOpen(false);
    };

    return (
        <div className="flex items-center justify-between mt-4 sm:mt-5">
            <p className="text-gray-700">
                Showing  {showing} of {totalItems}
            </p>
            {paginationVisible && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            )}
            <div className="flex items-center gap-2">
                <label htmlFor="itemsPerPage" className="text-gray-700">
                    Items per page
                </label>
                <div className="relative flex-1 sm:flex-none" ref={dropdownRef}>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 
                                 text-gray-700 bg-white border border-gray-300 rounded-lg 
                                 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-500
                                 transition-colors duration-200"
                    >
                        <span className="inline">{itemsPerPage}</span>
                        <CgChevronDown className="w-4 h-4" />
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <li key={value}>
                                    <button
                                        onClick={() => handleItemsPerPageChange(value)}
                                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 
                                                  transition-colors duration-150 ${itemsPerPage === value ? 'bg-gray-100' : ''}`}
                                    >
                                        {value}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DropdownPagination;