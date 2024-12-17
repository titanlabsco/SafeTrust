'use client';
import { ApartmentDetails } from '@/components/interestedPeople/ApartmentDetails';
import SearchAndFilter from '@/components/interestedPeople/SearchAndFilter';
import { Table } from '@/components/Table';
import Header from '@/layouts/Header';
import DropdownPagination from '@/components/interestedPeople/DropdownPagination';
import { MOCK_DATA } from '@/mockData/tableData';
import { useTableLogic } from '@/hooks/useTableLogic';
import { useTranslation } from 'react-i18next';

const Page = () => {
  const { t } = useTranslation();
  const apartment = {
    name: t('interestedPeople.title'),
    location: t('interestedPeople.address'),
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
    <section className="bg-gray-50 min-h-screen dark:bg-dark-background">
      <Header />
      <div className="px-4 mt-6 md:px-24 md:mt-16">
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
          onStatusChange={function (
            id: number,
            newStatus: 'accepted' | 'rejected'
          ): void {
            throw new Error('Function not implemented.');
          }}
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
