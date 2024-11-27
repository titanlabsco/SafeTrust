import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaTags } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';
import { FaEllipsisH } from 'react-icons/fa';
import { HiOutlineFire } from 'react-icons/hi2';
import { FiChevronLeft, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { PiHandCoinsBold } from 'react-icons/pi';

const ApartmentsComponent = () => {
  const allApartments = [
    {
      id: 1,
      name: 'La Sabana House',
      location: 'San José',
      offers: 2,
      status: 'Inhabited',
      promoted: true,
      price: 4000,
    },
    {
      id: 2,
      name: 'Escazú Apartment',
      location: 'Escazú',
      offers: 5,
      status: 'Not Inhabited',
      promoted: false,
      price: 4000,
    },
    {
      id: 3,
      name: 'Santa Ana Condo',
      location: 'Santa Ana',
      offers: 7,
      status: 'Not Inhabited',
      promoted: false,
      price: 4000,
    },
    {
      id: 4,
      name: 'Beachside Villa',
      location: 'Jacó',
      offers: 1,
      status: 'Inhabited',
      promoted: false,
      price: 4000,
    },
    {
      id: 5,
      name: 'Downtown Loft',
      location: 'San José',
      offers: 2,
      status: 'Inhabited',
      promoted: true,
      price: 4000,
    },
    {
      id: 6,
      name: 'Mountain Retreat',
      location: 'Cartago',
      offers: 3,
      status: 'Inhabited',
      promoted: false,
      price: 4000,
    },
    {
      id: 7,
      name: 'Penthouse',
      location: 'San José',
      offers: 4,
      status: 'Not Inhabited',
      promoted: true,
      price: 4000,
    },
    {
      id: 8,
      name: 'La Sabana Luxury',
      location: 'San José',
      offers: 6,
      status: 'Inhabited',
      promoted: true,
      price: 4000,
    },
    {
      id: 9,
      name: 'Eco-friendly Apartment',
      location: 'Heredia',
      offers: 8,
      status: 'Not Inhabited',
      promoted: true,
      price: 4000,
    },
    {
      id: 10,
      name: 'Colonial Home',
      location: 'Alajuela',
      offers: 3,
      status: 'Inhabited',
      promoted: false,
      price: 4000,
    },
    {
      id: 11,
      name: 'City Center Studio',
      location: 'San José',
      offers: 2,
      status: 'Inhabited',
      promoted: false,
      price: 5000,
    },
    {
      id: 12,
      name: 'Lakeview Apartment',
      location: 'Cartago',
      offers: 4,
      status: 'Not Inhabited',
      promoted: true,
      price: 4500,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isPromotedFilterActive, setIsPromotedFilterActive] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string | null>('Status');
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [priceRangeDropdownOpen, setPriceRangeDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApartments = allApartments.filter((apartment) => {
    if (isPromotedFilterActive && !apartment.promoted) return false;
    if (statusFilter !== 'Status' && apartment.status !== statusFilter)
      return false;
    if (
      searchQuery &&
      !apartment.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const totalSteps = Math.ceil(filteredApartments.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentApartments = filteredApartments.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const togglePromotedFilter = () => {
    setIsPromotedFilterActive(!isPromotedFilterActive);
    setCurrentPage(1);
  };

  const handleStatusChange = (status: string) => {
    setStatusFilter(status);
    setStatusDropdownOpen(false);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
    setDropdownOpen(false);
  };

  const maxItemsPerPage = filteredApartments.length;

  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center border rounded-[24px] px-4 py-2 w-full max-w-sm">
          <AiOutlineSearch className="text-gray-500 mr-2 w-[24px] h-[24px]" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full outline-none text-[16px] text-custom-grey"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={togglePromotedFilter}
          >
            <span className="text-custom-grey font-[400] text-[16px]">
              Promoted
            </span>
            <div
              className={`w-[20px] h-[20px] rounded flex items-center justify-center ${
                isPromotedFilterActive ? 'bg-[#FF7F00]' : 'bg-gray-300'
              }`}
            >
              {isPromotedFilterActive && <BsCheck className="text-white" />}
            </div>
          </div>

          <div className="relative">
            <button
              className="flex items-center justify-center w-[170px] h-[36px] border rounded-[7px] px-3 text-[16px] text-custom-grey gap-2"
              onClick={() => setPriceRangeDropdownOpen(!priceRangeDropdownOpen)}
            >
              <PiHandCoinsBold size={22} />
              <span>Price Range</span>
              <FiChevronDown className="ml-auto" />
            </button>
            {priceRangeDropdownOpen && (
              <div className="absolute top-[40px] left-0 w-[150px] border border-gray-300 rounded-[7px] bg-white shadow-md z-10">
                {['$0-$1000', '$1000-$2000', '$2000-$3000', '$3000+'].map(
                  (range) => (
                    <div
                      key={range}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-[16px] text-custom-grey"
                      onClick={() =>
                        console.log(`Selected price range: ${range}`)
                      }
                    >
                      {range}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center justify-center w-[170px] h-[36px] border rounded-[7px] px-3 text-[16px] text-custom-grey gap-2"
              onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
            >
              <FaTags />
              <span>{statusFilter || 'Status'}</span>
              <FiChevronDown className="ml-auto" />
            </button>
            {statusDropdownOpen && (
              <div className="absolute top-[40px] left-0 w-[150px] border border-gray-300 rounded-[7px] bg-white shadow-md z-10">
                {['Status', 'Inhabited', 'Not Inhabited'].map((status) => (
                  <div
                    key={status}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-[16px] text-custom-grey"
                    onClick={() => handleStatusChange(status)}
                  >
                    {status}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="text-gray-600 text-[16px]">
          <span>
            Showing {currentApartments.length} of {filteredApartments.length}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-custom-grey text-[16px] font-[400]">
            Items per page
          </span>
          <div className="relative">
            <div
              className="flex items-center justify-between w-[80px] h-[36px] border border-gray-300 rounded-[8px] px-3 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className="text-[16px] text-custom-grey">
                {itemsPerPage}
              </span>
              <FiChevronDown className="text-gray-500 w-[16px] h-[16px]" />
            </div>
            {dropdownOpen && (
              <div className="absolute top-[40px] left-0 w-[80px] border text-custom-grey border-gray-300 rounded-[8px] bg-white shadow-md z-10">
                {Array.from(
                  { length: maxItemsPerPage - 4 },
                  (_, i) => i + 5
                ).map((value) => (
                  <div
                    key={value}
                    className={`px-3 py-1 cursor-pointer text-[16px] ${value === itemsPerPage ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    onClick={() => handleItemsPerPageChange(value)}
                  >
                    {value}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto max-w-full">
        <table className="table-auto w-full text-[16px] rounded-[7px] overflow-hidden">
          <thead>
            <tr className="text-center text-custom-grey bg-[#6565641F] h-[50px]">
              <th className="p-2 text-[16px] font-bold">ID No.</th>
              <th className="p-2 text-[16px] font-bold">Apartment Name</th>
              <th className="p-2 text-[16px] font-bold">Location</th>
              <th className="p-2 text-[16px] font-bold">Offers</th>
              <th className="p-2 text-[16px] font-bold">Status</th>
              <th className="p-2 text-[16px] font-bold">Promoted</th>
              <th className="p-2 text-[16px] font-bold">Price</th>
              <th className="p-2 text-[16px] font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentApartments.map((apartment, index) => (
              <tr
                key={apartment.id}
                className={`text-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
                style={{ height: '70px' }}
              >
                <td className="p-2 text-custom-grey">{apartment.id}</td>
                <td className="p-2 text-custom-grey">{apartment.name}</td>
                <td className="p-2 text-gray-700">{apartment.location}</td>
                <td className="p-2 text-[#929090]">{apartment.offers}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded-[7px] ${
                      apartment.status === 'Inhabited'
                        ? 'bg-[#82ECA6] text-[#187135]'
                        : 'bg-custom-grey text-white'
                    }`}
                  >
                    {apartment.status}
                  </span>
                </td>
                <td className="p-2 flex justify-center">
                  {apartment.promoted && (
                    <HiOutlineFire size={30} color="#FF7F00" />
                  )}
                </td>
                <td className="p-2 text-custom-grey">
                  ${apartment.price.toLocaleString()}
                </td>
                <td className="p-2 flex justify-center">
                  <button>
                    <FaEllipsisH className="text-custom-orange w-[1.3rem] h-[1.3rem]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center space-x-2 mt-4">
        <button
          className="w-[32px] h-[32px] border-2 rounded-md flex items-center justify-center text-gray-400"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FiChevronLeft />
        </button>
        {[...Array(totalSteps)].map((_, index) => (
          <button
            key={index}
            className={`w-[32px] h-[32px] border-2 rounded-md ${
              currentPage === index + 1
                ? 'bg-white border-custom-orange text-custom-orange'
                : 'bg-white border-gray-200 text-custom-grey'
            } flex items-center justify-center`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="w-[32px] h-[32px] border-2 rounded-md flex items-center justify-center text-gray-400"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalSteps}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ApartmentsComponent;
