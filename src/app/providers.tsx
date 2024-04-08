'use client'

import { type ReactNode } from 'react'
import { WalletProvider } from "@opensea/wallet"

export function Providers(props: { children: ReactNode }) {

  return (
    <WalletProvider config={{ environment: "production "}}>
      {props.children}
    </WalletProvider>
  )
}
