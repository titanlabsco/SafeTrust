export interface TableData {
    id: number
    name: string
    phone: string
    wallet: string
    offerDate: string
    status: 'pending' | 'accepted'
  }
  
  export interface DataTableProps {
    data: TableData[]
    onActionClick?: (action: string, item: TableData) => void
  }
  
  