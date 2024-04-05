import {
  PROD_OPENSEA_WALLET_URL,
  LOCAL_OPENSEA_WALLET_URL,
  DEV_OPENSEA_WALLET_URL,
} from "@opensea/wallet-sdk"
import { HttpTransport, http } from "viem"
import {
  avalanche,
  avalancheFuji,
  mainnet,
  polygon,
  polygonMumbai,
  sepolia,
} from "viem/chains"
import { createConfig as wagmiCreateConfig } from "wagmi"
import { embeddedWalletConnector } from "../src/embeddedWalletconnector"

// All supported chains
const MAINNET_CHAINS = [mainnet, avalanche, polygon] as const
const TESTNET_CHAINS = [sepolia, avalancheFuji, polygonMumbai] as const
export const CHAINS = [...MAINNET_CHAINS, ...TESTNET_CHAINS] as const

// Transports for all supported chains
export const TRANSPORTS: Record<(typeof CHAINS)[number]["id"], HttpTransport> =
  {
    [mainnet.id]: http("https://mainnet.infura.io/v3/"),
    [sepolia.id]: http("https://sepolia.infura.io/v3/"),
    [avalanche.id]: http("https://api.avax.network/ext/bc/C/rpc"),
    [avalancheFuji.id]: http("https://api.avax-test.network/ext/bc/C/rpc"),
    [polygon.id]: http("https://polygon-rpc.com/"),
    [polygonMumbai.id]: http("https://rpc-mumbai.matic.today/"),
  } as const

// Embedded wallet connector custom configuration
export type Environment = "production" | "development" | "local"

function getWalletUrl(environment?: Environment): string {
  if (environment === "production") {
    return PROD_OPENSEA_WALLET_URL
  } else if (environment === "local") {
    return LOCAL_OPENSEA_WALLET_URL
  } else {
    return DEV_OPENSEA_WALLET_URL
  }
}

// Custom createConfig function
export type ConfigParams = {
  environment?: Environment
  supportInjectedWallets?: boolean
}

export function createConfig(config: ConfigParams) {
  return wagmiCreateConfig({
    chains: CHAINS,
    transports: TRANSPORTS,
    connectors: [
      embeddedWalletConnector({
        url: getWalletUrl(config.environment),
      }),
    ],
    multiInjectedProviderDiscovery: config.supportInjectedWallets,
    ssr: true,
  })
}