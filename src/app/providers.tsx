'use client'

import { type ReactNode } from 'react'
import { WalletProvider } from "@opensea/wallet"

export function Providers(props: { children: ReactNode }) {

  return (
    <WalletProvider environment="production" clientId="client-WY2cXW6EKKZZQ8CsdbA4WqGwVf2Cjh2ZuGWCQ547iwpQN">
      {props.children}
    </WalletProvider>
  )
}
   