'use client'

import { type ReactNode } from 'react'
import { WalletProvider } from "@opensea/wallet"

export function Providers(props: { children: ReactNode }) {

  return (
    <WalletProvider environment="development" >
      {props.children}
    </WalletProvider>
  )
}
