import axios from "axios";
import { handleAxiosError } from "@/utils/handleAxiosError";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface EscrowPayload {
  engagementId: string;
  description: string;
  serviceProvider: string;
  amount: string;
  signer: string;
}

export const initializeEscrow = async (payload: EscrowPayload) => {
  const url = `${API_URL}/deployer/invoke-deployer-contract`;

  try {
    const { data } = await axios.post(url, payload);
    console.log("Respuesta de la API:", data);
    return data;
  } catch (error) {
    handleAxiosError(error);
  }
};
