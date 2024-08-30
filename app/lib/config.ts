import { createConfig } from "wagmi";
import { http } from "viem";
import { QueryClient } from "@tanstack/react-query";
import { sepolia } from '@wagmi/core/chains';
import { dedicatedWalletConnector } from "@magiclabs/wagmi-connector";

export const config = createConfig({
  chains: [sepolia],
  ssr: true,
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_RPC_URL),
  },
  connectors: [
    dedicatedWalletConnector({
      chains: [sepolia],
      options: {
        apiKey: process.env.NEXT_PUBLIC_MAGIC_API_KEY!,
        isDarkMode: true,
        oauthOptions: {
          providers: ["google", "twitter", "github"],
        },
        magicSdkConfiguration: {
          network: {
            rpcUrl: process.env.NEXT_PUBLIC_RPC_URL!,
            chainId: 11155111,
          },
        },
      },
    }),
  ],
});

export const queryClient = new QueryClient();