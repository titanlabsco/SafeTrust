"use client"

import { useEffect, useMemo, useState } from "react";
import { ApartmentDetails } from "@/components/interestedPeople/ApartmentDetails";
import SearchAndFilter from "@/components/interestedPeople/SearchAndFilter";
import { Table } from "@/components/Table";
import Header from "@/layouts/Header";
import { TableData } from "@/types/table";
import { filterTableData } from "@/utils/filterTableData";
import DropdownPagination from "@/components/interestedPeople/DropdownPagnation";
import { MOCK_DATA } from "@/mockData/tableData";
export interface FilterState {
  search: string;
  dateRange: string;
  status: string;
  name: string;
}

const Page = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    dateRange: '',
    status: '',
    name: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [tableData, setTableData] = useState<TableData[]>(MOCK_DATA);

  const apartment = {
    name: "La sabana house",
    location: "329 Calle santos, paseo colón, San José",
    bedrooms: 2,
    bathrooms: 1,
    petFriendly: true,
    price: 4058.00
  };

  // Filter data
  const filteredData = useMemo(() => {
    return filterTableData(tableData, filters);
  }, [tableData, filters]);

  // Paginate data
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
    setFilters(prev => ({ ...prev, search: searchTerm, name: searchTerm }));
  };

  const handleDateRangeChange = (range: string) => {
    setFilters(prev => ({ ...prev, dateRange: range }));
  };

  const handleStatusChange = (status: string) => {
    setFilters(prev => ({ ...prev, status: status }));
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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

  const handleStatusUpdate = (id: number, newStatus: "accepted" | "rejected" | "pending") => {
    setTableData(prevData => 
      prevData.map(item => 
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <section className="bg-gray-50 min-h-screen">
      <Header />
      <div className="px-2 md:px-8 mt-8">
        <ApartmentDetails {...apartment} />
        <SearchAndFilter
          onSearch={handleSearch}
          onDateRangeChange={handleDateRangeChange}
          onStatusChange={handleStatusChange}
          selectedDateRange={filters.dateRange}
          selectedStatus={filters.status}
        />
        <DropdownPagination
          paginationVisible={false}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={filteredData.length}
          onItemsPerPageChange={handleItemsPerPageChange}
          onPageChange={handlePageChange}
        />        
        <Table 
          data={paginatedData}
          onActionClick={handleActionClick}
          onStatusChange={handleStatusUpdate}
        />
        <div className="hidden sm:block">
          <DropdownPagination
            paginationVisible
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={filteredData.length}
            onItemsPerPageChange={handleItemsPerPageChange}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;

