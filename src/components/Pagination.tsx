import React from 'react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 4,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);
    let startPage = Math.max(currentPage - halfVisiblePages, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

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
      
      {getPageNumbers().map((pageNumber) => (
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
      
      {totalPages > maxVisiblePages && currentPage < totalPages - 1 && (
        <span className="px-2 py-1 text-gray-500">...</span>
      )}
      
      {totalPages > maxVisiblePages && currentPage < totalPages && (
        <button
          onClick={() => onPageChange(totalPages)}
          className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          {totalPages}
        </button>
      )}
      
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

