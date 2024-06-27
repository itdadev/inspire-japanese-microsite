import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// NOTE: React Query - default settings
const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchInterval: 60 * 1000 * 180, // 3 hrs
      refetchIntervalInBackground: true,
      suspense: false,
      staleTime: 60 * 1000 * 180, // 3 hrs,
      cacheTime: 60 * 1000 * 180, // 3 hrs,
      keepPreviousData: true,
    },
    mutations: {
      retry: 1,
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);

export const QueryProvider = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
