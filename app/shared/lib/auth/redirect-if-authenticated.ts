import { USERS_API_PATHS } from '@/app/api/users/users-api-paths';
import { authenticatedServerFetch } from '@/app/shared/lib/http/server-auth-fetch';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function redirectIfAuthenticated() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (!accessToken && !refreshToken) {
    return;
  }

  const result = await authenticatedServerFetch({
    path: USERS_API_PATHS.USERS_ME,
    method: 'GET',
  }).catch(() => null);

  if (!result) {
    return;
  }

  if (result.response.ok) {
    redirect('/');
  }
}
