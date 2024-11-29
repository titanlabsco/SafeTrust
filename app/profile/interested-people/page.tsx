"use client";
import { ApartmentDetails } from "@/components/interestedPeople/ApartmentDetails";
import SearchAndFilter from "@/components/interestedPeople/SearchAndFilter";
import { Table } from "@/components/Table";
import Header from "@/layouts/Header";
import DropdownPagination from "@/components/interestedPeople/DropdownPagination";
import { MOCK_DATA } from "@/mockData/tableData";
import { useTableLogic } from "@/hooks/useTableLogic";

const Page = () => {
  const apartment = {
    name: "La sabana house",
    location: "329 Calle santos, paseo colón, San José",
    bedrooms: 2,
    bathrooms: 1,
    petFriendly: true,
    price: 4058.0,
  };

  const {
    filters,
    currentPage,
    itemsPerPage,
    filteredData,
    paginatedData,
    totalPages,
    handleSearch,
    handleDateRangeChange,
    handleStatusChange,
    handleItemsPerPageChange,
    handlePageChange,
    handleActionClick,
  } = useTableLogic({
    initialData: MOCK_DATA,
  });

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
        <Table data={paginatedData} onActionClick={handleActionClick} />
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
