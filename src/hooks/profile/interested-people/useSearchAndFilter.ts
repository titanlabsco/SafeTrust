import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';



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

    const {t}=useTranslation();
    const dateRangeOptions = [
        { label: t('interestedPeople.dateRange.rangeOne'), value: 'today' },
        { label: t('interestedPeople.dateRange.rangeTwo'), value: 'last7days' },
        { label: t('interestedPeople.dateRange.rangeThree'), value: 'last30days' },
        { label: t('interestedPeople.dateRange.rangeFour'), value: 'last90days' },
        { label: t('interestedPeople.dateRange.rangeFive'), value: 'custom' },
    ];
    
    const statusOptions = [
        { label: t('interestedPeople.filter.default'), value: '' },
        { label: t('interestedPeople.filter.filterOne'), value: 'pending' },
        { label: t('interestedPeople.filter.filterTwo'), value: 'accepted' },
        { label: t('interestedPeople.filter.filterThree'), value: 'rejected' },
    ];


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
        console.log(option)
        return option ? option.label :  t('interestedPeople.dateRange.default');
    };

    const getSelectedStatusLabel = () => {
        const option = statusOptions.find(opt => opt.value === selectedStatus);
        console.log(option)
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
        toggleStatus,
    };
};