import { isAccessTokenExpired } from '@/app/shared/lib/auth/access-token';
import { getCurrentUser } from '@/app/shared/lib/auth/get-current-user';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function redirectIfAuthenticated() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken || isAccessTokenExpired(accessToken)) {
    return;
  }

  const user = await getCurrentUser();

  if (user) {
    redirect('/');
  }
}
