"use client"

import { useEffect, useMemo, useState } from "react";
import { ApartmentDetails } from "@/components/interestedPeople/ApartmentDetails";
import SearchAndFilter from "@/components/interestedPeople/SearchAndFilter";
import { Table } from "@/components/Table";
import Header from "@/layouts/Header";
import { TableData } from "@/types/table";
import { filterTableData } from "@/utils/filterTableData";
import DropdownPagination from "@/components/interestedPeople/DropdownPagnation";


const MOCK_DATA: TableData[] = [
  {
    id: 1,
    name: "Ben Duarte Fernández",
    phone: "+506 6483252",
    wallet: "XR6...32D",
    offerDate: "09/12/2024",
    status: "pending",
  },
  {
    id: 2,
    name: "Diego Duarte Fernández",
    phone: "+506 6483252",
    wallet: "XR6...32D",
    offerDate: "09/12/2024",
    status: "accepted",
  },
  {
    id: 3,
    name: "Diego Duarte Fernández",
    phone: "+506 6483252",
    wallet: "XR6...32D",
    offerDate: "09/12/2024",
    status: "pending",
  },
  {
    id: 4,
    name: "Diego Duarte Fernández",
    phone: "+506 6483252",
    wallet: "XR6...32D",
    offerDate: "09/12/2024",
    status: "pending",
  },
];

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
    return filterTableData(MOCK_DATA, filters);
  }, [filters]);

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

  const handleActionClick = (action: string, item: TableData) => {
    console.log(`Action ${action} clicked for item:`, item);
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
          onPageChange={setCurrentPage}
        />        
        <Table 
          data={paginatedData}
          onActionClick={handleActionClick}
        />
        <div className="hidden sm:block">
          <DropdownPagination
            paginationVisible
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={filteredData.length}
            onItemsPerPageChange={handleItemsPerPageChange}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;