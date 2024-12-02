import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type WalletState = {
  address: string;
  name: string;
  connectWalletStore: (address: string, name: string) => void;
  disconnectWalletStore: () => void;
};

export const useWalletStore = create<WalletState>()(
  persist(
    devtools((set) => ({
      address: '',
      name: '',
      connectWalletStore: (address: string, name: string) => {
        set({ address, name });
      },
      disconnectWalletStore: () => set({ address: '', name: '' }),
    })),
    {
      name: 'address-wallet',
    }
  )
);
