'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { ReactNode, useState } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ProgressProvider
        height='3px'
        color='var(--color-color2)'
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
      <ToastContainer
        closeOnClick
        closeButton={false}
        theme='dark'
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </QueryClientProvider>
  );
}
