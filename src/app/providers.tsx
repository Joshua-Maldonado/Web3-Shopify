'use client'

import { type ReactNode } from 'react'
import { WalletProvider } from "@opensea/wallet"

export function Providers(props: { children: ReactNode }) {
  // Client ID: client-WY2cXW6EKKZZQ8CsdbA4WqGwVf2Cjh2ZuGWCQ547iwpQN     environment="production"
  return (
    <WalletProvider environment="development" clientId="">
      {props.children}
    </WalletProvider>
  )
}
   