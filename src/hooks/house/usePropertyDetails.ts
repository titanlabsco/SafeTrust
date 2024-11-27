import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { kit } from '@/wallet/walletKit';
import { useBookReservation } from '@/hooks/escrow/useBookReservation';

const usePropertyDetails = () => {
  const [address, setAddress] = useState<string | null>(null);
  const router = useRouter();

  const { bookReservation, loadingBook, isBooked, contractId, engagementId } =
    useBookReservation(address);

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const { address } = await kit.getAddress();
        setAddress(address);
      } catch (error) {
        console.error('Error fetching wallet address:', error);
      }
    };

    fetchAddress();
  }, []);

  useEffect(() => {
    if (isBooked && contractId && engagementId) {
      localStorage.setItem('contractId', contractId);
      localStorage.setItem('engagementId', engagementId);

      router.push(`/house/pending`);
    }
  }, [isBooked, contractId, engagementId, router]);

  return { bookReservation, loadingBook, isBooked };
};

export default usePropertyDetails;
