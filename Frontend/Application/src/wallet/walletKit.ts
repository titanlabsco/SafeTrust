import {
  StellarWalletsKit,
  WalletNetwork,
  allowAllModules,
  ALBEDO_ID,
} from "@creit.tech/stellar-wallets-kit";

export const kit: StellarWalletsKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: ALBEDO_ID,
  modules: allowAllModules(),
});
