// src/features/bids/components/InvoiceHeader.tsx
interface InvoiceHeaderProps {
  invoiceNumber: string;
  status: string;
  date: string;
}

export const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({
  invoiceNumber,
  status,
  date,
}) => {
  const statusColor = status === 'Paid' ? 'text-green-600' : 'text-red-600';

  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow">
      <div>
        <h1 className="text-2xl font-bold">{invoiceNumber}</h1>
        <p className="text-gray-500 text-sm">Paid on: {date}</p>
      </div>
      <span className={`text-lg font-medium ${statusColor}`}>{status}</span>
    </div>
  );
};
