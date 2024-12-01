export interface TableData {
  id: number;
  name: string;
  phone: string;
  wallet: string;
  offerDate: string;
  status: "pending" | "accepted" | "rejected";
}

export interface DataTableProps {
  data: TableData[];
  onActionClick?: (action: string, item: TableData) => void;
  onStatusChange: (
    id: number,
    newStatus: "accepted" | "rejected" | "pending",
  ) => void;
}

export interface SearchAndFilterProps {
  onSearch: (searchTerm: string) => void;
  onDateRangeChange: (range: string) => void;
  onStatusChange: (status: string) => void;
  selectedDateRange: string;
  selectedStatus: string;
}

export interface DropdownPaginationProps {
  paginationVisible: boolean;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onItemsPerPageChange: (value: number) => void;
  onPageChange: (page: number) => void;
}

export interface FilterState {
  search: string;
  dateRange: string;
  status: string;
  name: string;
}
