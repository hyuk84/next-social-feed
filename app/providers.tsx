'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { createQueryClient } from './shared/lib/query/query-client';
import { useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => createQueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
