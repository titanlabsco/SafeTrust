import axios from "axios";

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error("Error de Axios:", error.message);
    throw error;
  } else {
    console.error("Error desconocido:", error);
    throw new Error("Se ha producido un error desconocido.");
  }
};
