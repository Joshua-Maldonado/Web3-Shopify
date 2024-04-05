'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { WalletProvider } from "@opensea/wallet"
import { createConfig, ConfigParams, Environment } from '../wagmi'

const Env = "production"
const config = {
  Environment: Env,
  supportInjectedWallets: true
} 

const configWagmi = createConfig(config)

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={configWagmi}>
      <QueryClientProvider client={queryClient}>
        <WalletProvider>
         {props.children}
        </WalletProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
