import { useState } from 'react'

interface Ethereum {
  request: (args: { method: string }) => Promise<unknown>
}

const useWallet = () => {
  const [account, setAccount] = useState<string | null>(null)

  const connectWallet = async () => {
    const { ethereum } = window as unknown as { ethereum?: Ethereum }

    if (ethereum) {
      try {
        const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as string[]
        setAccount(accounts[0])
      } catch (error) {
        console.error('Error connecting to MetaMask', error)
      }
    } else {
      console.error('MetaMask not detected')
    }
  }

  return { account, connectWallet }
}

export default useWallet
