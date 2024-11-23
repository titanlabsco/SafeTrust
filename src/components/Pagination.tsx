import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex items-center justify-center space-x-1" aria-label="Pagination">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="p-2 border-2 rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <IoChevronBack className="w-5 h-5" />
      </button>
      
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-4 py-1 rounded-md border-2 ${
            currentPage === pageNumber
              ? 'bg-orange-500 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-current={currentPage === pageNumber ? 'page' : undefined}
        >
          {pageNumber}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md text-gray-500 border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <IoChevronForward className="w-5 h-5" />
      </button>
    </nav>
  );
};

export default Pagination;