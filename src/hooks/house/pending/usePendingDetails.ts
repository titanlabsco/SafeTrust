import { useEffect, useState } from 'react';
import { kit } from '@/wallet/walletKit';

const usePendingDetails = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [contractId, setContractId] = useState<string | null>(null);
  const [engagementId, setEngagementId] = useState<string | null>(null);

  useEffect(() => {
    const savedContractId = localStorage.getItem('contractId');
    const savedEngagementId = localStorage.getItem('engagementId');

    setContractId(savedContractId);
    setEngagementId(savedEngagementId);

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

  return { address, contractId, engagementId };
};

export default usePendingDetails;
