import axios from "axios";
import { handleAxiosError } from "@/utils/handleAxiosError";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface EscrowPayload {
  contractId: string;
  engagementId: string;
  signer: string;
}

export const fundEscrow = async (payload: EscrowPayload) => {
  const url = `${API_URL}/escrow/fund-escrow`;

  try {
    const { data } = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Respuesta de la API:", data);
    return data;
  } catch (error) {
    handleAxiosError(error);
  }
};
