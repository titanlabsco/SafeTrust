import { useState } from "react";
import { initializeEscrow } from "@/services/escrow/initializeEscrow";
import { toast } from "react-toastify";

export const useBookReservation = (address: string | null) => {
  const [loadingBook, setLoadingBook] = useState(false);
  const [contractId, setContractId] = useState<string | null>(null);
  const [engagementId, setEngagementId] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const bookReservation = async () => {
    if (!address) {
      toast.error("Please connect your wallet first");
      return;
    }

    setLoadingBook(true);

    const payload = {
      engagementId: "Puerto Viejo House",
      description: "130 km away · 2 bedrooms · 2 beds · 1 bathroom",
      serviceProvider:
        "GCEM4QSKQ42YJHE2MZG5JNIMG3T7ONLICYNXIN7HRSMREDVO2KUW3JNL",
      amount: "1",
      signer: address,
    };

    try {
      const response = await initializeEscrow(payload);
      const { contract_id, engagement_id } = response;

      setContractId(contract_id);
      setEngagementId(engagement_id);
      setIsBooked(true);
      toast.success("Reservation made successfully!");
      toast.warning("Pending payment");
    } catch (error) {
      console.error("Error booking the apartment:", error);
      toast.error("Error booking the apartment. Please try again.");
    } finally {
      setLoadingBook(false);
    }
  };

  return { bookReservation, loadingBook, isBooked, contractId, engagementId };
};
