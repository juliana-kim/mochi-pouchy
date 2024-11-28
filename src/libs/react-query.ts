import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      throwOnError: true,
      staleTime: 30 * 1000,
      networkMode: 'always'
    },
    mutations: {
      retry: false,
      throwOnError: true
    }
  }
}

export const queryClient = new QueryClient(queryClientOptions);

export const queryKeys = {
  getUser: ['getUser'],
  getWalletNFT: ['getWalletNFT'],
  getWalletFT: ['getWalletFT'],
  getMetadata: (token_url: string) => ['getMetadata', token_url]
}