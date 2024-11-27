import { useState, useRef, useEffect } from 'react';

export const dateRangeOptions = [
    { label: 'Today', value: 'today' },
    { label: 'Last 7 days', value: 'last7days' },
    { label: 'Last 30 days', value: 'last30days' },
    { label: 'Last 90 days', value: 'last90days' },
    { label: 'Custom range', value: 'custom' }
];

export const statusOptions = [
    { label: 'All', value: '' },
    { label: 'Pending', value: 'pending' },
    { label: 'Accepted', value: 'accepted' },
    { label: 'Rejected', value: 'rejected' },
];

interface UseSearchAndFilterProps {
    onDateRangeChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    selectedDateRange: string;
    selectedStatus: string;
}

export const useSearchAndFilter = ({
    onDateRangeChange,
    onStatusChange,
    selectedDateRange,
    selectedStatus
}: UseSearchAndFilterProps) => {
    const [dateRangeOpen, setDateRangeOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const dateRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
                setDateRangeOpen(false);
            }
            if (statusRef.current && !statusRef.current.contains(event.target as Node)) {
                setStatusOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getSelectedDateRangeLabel = () => {
        const option = dateRangeOptions.find(opt => opt.value === selectedDateRange);
        return option ? option.label : 'Date range';
    };

    const getSelectedStatusLabel = () => {
        const option = statusOptions.find(opt => opt.value === selectedStatus);
        return option ? option.label : 'Status';
    };

    const handleDateRangeChange = (value: string) => {
        onDateRangeChange(value);
        setDateRangeOpen(false);
    };

    const handleStatusChange = (value: string) => {
        onStatusChange(value);
        setStatusOpen(false);
    };

    const toggleDateRange = () => setDateRangeOpen(!dateRangeOpen);
    const toggleStatus = () => setStatusOpen(!statusOpen);

    return {
        dateRangeOpen,
        statusOpen,
        dateRef,
        statusRef,
        getSelectedDateRangeLabel,
        getSelectedStatusLabel,
        handleDateRangeChange,
        handleStatusChange,
        toggleDateRange,
        toggleStatus
    };
};