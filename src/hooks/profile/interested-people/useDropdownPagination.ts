import { useState, useRef, useEffect } from 'react';

interface UseDropdownPaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onItemsPerPageChange: (value: number) => void;
}

export const useDropdownPagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onItemsPerPageChange,
}: UseDropdownPaginationProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const showing = Math.min(currentPage * itemsPerPage, totalItems);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return {
    dropdownOpen,
    dropdownRef,
    showing,
    handleItemsPerPageChange,
    toggleDropdown,
  };
};
