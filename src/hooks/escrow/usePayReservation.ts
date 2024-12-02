import { useState } from 'react';
import { fundEscrow } from '@/services/escrow/fundEscrow';
import { toast } from 'react-toastify';

export const usePayReservation = (
  address: string | null,
  contractId: string | null,
  engagementId: string | null
) => {
  const [loadingPay, setLoadingPay] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const payReservation = async () => {
    if (!contractId || !engagementId) {
      toast.error('Missing contract or engagement details');
      return;
    }

    setLoadingPay(true);

    const payload = {
      contractId,
      engagementId,
      signer: address as string,
    };

    try {
      await fundEscrow(payload);
      toast.success('Payment made successfully!');
      setIsPaid(true);
    } catch (error) {
      console.error('Error when paying:', error);
      toast.error('Error when paying. Please try again.');
    } finally {
      setLoadingPay(false);
    }
  };

  return { payReservation, loadingPay, isPaid };
};
