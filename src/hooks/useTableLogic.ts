import { useState, useMemo, useEffect } from "react";
import { TableData } from "@/@types/table";
import { filterTableData } from "@/utils/filterTableData";
import { FilterState } from "@/@types/table";

interface UseTableLogicProps {
  initialData: TableData[];
  initialItemsPerPage?: number;
}

export const useTableLogic = ({
  initialData,
  initialItemsPerPage = 2,
}: UseTableLogicProps) => {
  // State
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    dateRange: "",
    status: "",
    name: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [tableData, setTableData] = useState<TableData[]>(initialData);

  // Memoized filtered data
  const filteredData = useMemo(() => {
    return filterTableData(tableData, filters);
  }, [tableData, filters]);

  // Memoized paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, itemsPerPage]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Handlers
  const handleSearch = (searchTerm: string) => {
    setFilters((prev) => ({ ...prev, search: searchTerm, name: searchTerm }));
  };

  const handleDateRangeChange = (range: string) => {
    setFilters((prev) => ({ ...prev, dateRange: range }));
  };

  const handleStatusChange = (status: string) => {
    setFilters((prev) => ({ ...prev, status: status }));
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleStatusUpdate = (
    id: number,
    newStatus: "accepted" | "rejected" | "pending",
  ) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );
  };

  const handleActionClick = (action: string, item: TableData) => {
    switch (action) {
      case "accept":
        handleStatusUpdate(item.id, "accepted");
        break;
      case "reject":
        handleStatusUpdate(item.id, "rejected");
        break;
      case "pend":
        handleStatusUpdate(item.id, "pending");
        break;
      case "edit":
      case "delete":
        console.log(`Action ${action} clicked for item:`, item);
        break;
    }
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return {
    // State
    filters,
    currentPage,
    itemsPerPage,
    filteredData,
    paginatedData,
    totalPages,

    // Handlers
    handleSearch,
    handleDateRangeChange,
    handleStatusChange,
    handleItemsPerPageChange,
    handlePageChange,
    handleActionClick,
    handleStatusUpdate,
  };
};
