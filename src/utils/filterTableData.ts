import { TableData } from '@/@types/table';
import { FilterState } from '@/@types/table';

export const filterTableData = (data: TableData[], filters: FilterState) => {
  return data.filter((item) => {
    // Name and Search filter combined
    const searchMatch =
      filters.search === '' ||
      filters.name === '' ||
      item.name.toLowerCase().includes(filters.name.toLowerCase()) ||
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(filters.search.toLowerCase())
      );

    // Status filter
    const statusMatch =
      filters.status === '' ||
      item.status.toLowerCase() === filters.status.toLowerCase();

    // Date filter
    let dateMatch = true;
    if (filters.dateRange) {
      const itemDate = new Date(item.offerDate);
      const today = new Date();

      switch (filters.dateRange) {
        case 'today':
          dateMatch = itemDate.toDateString() === today.toDateString();
          break;
        case 'last7days':
          const last7Days = new Date(today.setDate(today.getDate() - 7));
          dateMatch = itemDate >= last7Days;
          break;
        case 'last30days':
          const last30Days = new Date(today.setDate(today.getDate() - 30));
          dateMatch = itemDate >= last30Days;
          break;
        case 'last90days':
          const last90Days = new Date(today.setDate(today.getDate() - 90));
          dateMatch = itemDate >= last90Days;
          break;
        default:
          dateMatch = true;
      }
    }

    return searchMatch && statusMatch && dateMatch;
  });
};
