import {
  allowAllModules,
  ALBEDO_ID,
  ISupportedWallet,
  StellarWalletsKit,
  WalletNetwork,
} from "@creit.tech/stellar-wallets-kit";
import { useWalletStore } from "@/store/walletStore";

export const useWallet = () => {
  const { connectWalletStore, disconnectWalletStore } = useWalletStore();

  const kit: StellarWalletsKit = new StellarWalletsKit({
    modules: allowAllModules(),
    network: WalletNetwork.TESTNET,
    selectedWalletId: ALBEDO_ID,
  });

  const connectWallet = async () => {
    await kit.openModal({
      modalTitle: "Connect to your favorite wallet",
      onWalletSelected: async (option: ISupportedWallet) => {
        kit.setWallet(option.id);

        const { address } = await kit.getAddress();
        const { name } = option;
        connectWalletStore(address, name);
      },
    });
  };

  const disconnectWallet = async () => {
    await kit.disconnect();
    disconnectWalletStore();
  };

  return {
    connectWallet,
    disconnectWallet,
  };
};
