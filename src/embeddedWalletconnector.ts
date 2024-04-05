import { createConnector } from "wagmi"
import {
  initialize,
  connect,
  disconnect,
  getAccounts,
  getChainId,
  getProvider,
  isAuthorized,
  switchChain,
  PROD_OPENSEA_WALLET_URL,
} from "@opensea/wallet-sdk"
import { Address, Hex, hexToNumber } from "viem"
import { CHAINS } from "./wagmi"

export const EMBEDDED_WALLET_CONNECTOR_ID = "embeddedWallet"

type EmbeddedWalletConnectorOptions = {
  url?: string
}

export function embeddedWalletConnector({
  url = PROD_OPENSEA_WALLET_URL,
}: EmbeddedWalletConnectorOptions = {}) {
  return createConnector(config => {
    const onChainChainged = (chainId: string) => {
      console.log("On chain changed", chainId)
      config.emitter.emit("change", {
        chainId: hexToNumber(chainId as Hex),
      })
    }
    return {
      id: EMBEDDED_WALLET_CONNECTOR_ID,
      name: "Embedded Wallet",
      setup: () => initialize({ url }),
      connect: async () => {
        const { accounts, chainId } = await connect()
        const provider = await getProvider()
        if (!provider) {
          throw new Error("Provider not found after connecting")
        }
        provider.on("chainChanged", onChainChainged)

        return {
          accounts,
          chainId,
        }
      },
      disconnect,
      getAccounts,
      getChainId,
      getProvider,
      isAuthorized,
      switchChain: async (params: { chainId: number }) => {
        await  switchChain
        (params.chainId)
        const chain = CHAINS.find(c => c.id === params.chainId)
        if (!chain) {
          throw new Error("Tried to switch to an unsupported chain")
        }
        console.log({ chain })
        return chain
      },
      type: "embedded",
      onAccountsChanged: (accounts: Address[]): void => {
        if (accounts.length > 0) {
          disconnect()
          return
        }
        config.emitter.emit("change", {
          accounts,
        })
      },
      onChainChanged: (chainId: string): void => {
        console.log({ chainId })
        config.emitter.emit("change", {
          chainId: Number(chainId),
        })
      },
      onDisconnect: (): void => {
        config.emitter.emit("disconnect")
      },
    }
  })
}