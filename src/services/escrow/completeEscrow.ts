import axios from 'axios';
import albedo from '@albedo-link/intent';
import { handleAxiosError } from '@/utils/handleAxiosError';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface EscrowPayload {
  contractId: string;
  engagementId: string;
  signer: string;
}

export const completeEscrow = async (payload: EscrowPayload) => {
  try {
    console.log('Sending payload to complete-escrow:', payload);
    const response = await axios.post(
      `${API_URL}/escrow/complete-escrow`,
      payload
    );

    const { unsignedTransaction } = response.data;
    console.log('Unsigned transaction received:', unsignedTransaction);

    if (!unsignedTransaction) {
      throw new Error('No unsigned transaction returned from complete-escrow.');
    }

    const signedResponse = await albedo.tx({
      xdr: unsignedTransaction,
      network: 'testnet',
    });
    console.log('Albedo response:', signedResponse);

    const { signed_envelope_xdr: signedTxXdr } = signedResponse;
    console.log('Signed transaction:', signedTxXdr);

    const tx = await axios.post(`${API_URL}/helper/send-transaction`, {
      signedXdr: signedTxXdr,
    });

    const { data } = tx;
    console.log('Final server response:', data);

    return data;
  } catch (error) {
    handleAxiosError(error);
  }
};
