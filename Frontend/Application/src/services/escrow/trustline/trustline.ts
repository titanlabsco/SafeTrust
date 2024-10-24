import axios from "axios";
import { handleAxiosError } from "@/utils/handleAxiosError";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface TrustlinePayload {
  sourceSecretKey: string;
}

export const setTrustline = async (sourceSecretKey: string) => {
  const url = `${API_URL}/helper/set-trustline`;

  const payload: TrustlinePayload = {
    sourceSecretKey,
  };

  try {
    const { data } = await axios.post(url, payload);
    console.log("Trustline established successfully:", data);
    return data;
  } catch (error) {
    handleAxiosError(error);
  }
};
