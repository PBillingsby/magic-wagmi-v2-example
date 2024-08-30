"use client";

import { WagmiProvider } from "wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { config, queryClient } from "./lib/config";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <WagmiProvider config={config} >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
