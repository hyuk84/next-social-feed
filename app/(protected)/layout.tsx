import type { ReactNode } from 'react';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { requireUser } from '@/app/shared/lib/auth/require-user';
import { createQueryClient } from '@/app/shared/lib/query/query-client';
import { queryKeys } from '@/app/shared/lib/query/query-keys';

type ProtectedLayoutProps = {
  children: ReactNode;
};

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const user = await requireUser();
  const queryClient = createQueryClient();

  queryClient.setQueryData(queryKeys.users.me, user);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
