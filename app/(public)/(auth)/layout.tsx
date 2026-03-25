import type { ReactNode } from 'react';
import { redirectIfAuthenticated } from '@/app/shared/lib/auth/redirect-if-authenticated';

type PublicAuthLayoutProps = {
  children: ReactNode;
};

export default async function PublicAuthLayout({
  children,
}: PublicAuthLayoutProps) {
  await redirectIfAuthenticated();

  return children;
}
