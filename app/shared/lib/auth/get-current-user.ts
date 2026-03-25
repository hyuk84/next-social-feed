import 'server-only';

import { USERS_API_PATHS } from '@/app/api/users/users-api-paths';
import { User } from '@/app/features/users/types/user.types';
import { serverFetch } from '@/app/shared/lib/http/server-fetch';
import { cookies } from 'next/headers';

function createAuthHeaders(accessToken: string): Record<string, string> {
  return {
    Authorization: `Bearer ${accessToken}`,
  };
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    return null;
  }

  const response = await serverFetch({
    path: USERS_API_PATHS.USERS_ME,
    method: 'GET',
    headers: createAuthHeaders(accessToken),
  }).catch(() => null);

  if (!response?.ok) {
    return null;
  }

  return (await response.json().catch(() => null)) as User | null;
}
