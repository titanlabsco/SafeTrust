import { useState } from "react";
import { cancelEscrow } from "@/services/escrow/cancelEscrow";
import { toast } from "react-toastify";

export const useCancelReservation = (
  contractId: string | null,
  engagementId: string | null,
) => {
  const [loadingCancel, setLoadingCancel] = useState(false);

  const cancelReservation = async () => {
    if (!contractId || !engagementId) {
      toast.error("Missing contract or engagement details");
      return;
    }

    setLoadingCancel(true);

    const payload = {
      contractId,
      engagementId,
      serviceProvider:
        "GCEM4QSKQ42YJHE2MZG5JNIMG3T7ONLICYNXIN7HRSMREDVO2KUW3JNL",
    };

    try {
      const data = await cancelEscrow(payload);
      if (data?.status === "SUCCESS") {
        toast.success("Rent canceled successfully!");
      } else {
        toast.error("Rent cancellation failed!");
      }
    } catch (error) {
      console.error("Rent could not be cancelled:", error);
      toast.error("Rent could not be cancelled. Please try again.");
    } finally {
      setLoadingCancel(false);
    }
  };

  return { cancelReservation, loadingCancel };
};
