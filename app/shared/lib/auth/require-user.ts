import { USERS_API_PATHS } from '@/app/api/users/users-api-paths';
import { authenticatedServerFetch } from '@/app/shared/lib/http/server-auth-fetch';
import { User } from '@/app/features/users/types/user.types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

function redirectToLogin() {
  redirect('/login');
}

export async function requireUser() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (!accessToken && !refreshToken) {
    redirectToLogin();
  }

  const result = await authenticatedServerFetch({
    path: USERS_API_PATHS.USERS_ME,
    method: 'GET',
  }).catch(() => null);

  if (!result) {
    return redirectToLogin();
  }

  if (!result.response.ok) {
    return redirectToLogin();
  }

  const user = (await result.response.json().catch(() => null)) as User | null;

  if (!user) {
    return redirectToLogin();
  }

  return user;
}
