import type { ReactNode } from 'react';
import { requireUser } from '@/app/shared/lib/auth/require-user';

type ProtectedLayoutProps = {
  children: ReactNode;
};

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  await requireUser();

  return children;
}
