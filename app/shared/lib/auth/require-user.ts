import { getCurrentUser } from '@/app/shared/lib/auth/get-current-user';
import { User } from '@/app/features/users/types/user.types';
import { redirect } from 'next/navigation';

function redirectToLogin(): never {
  redirect('/login');
}
export async function requireUser(): Promise<User> {
  const user = await getCurrentUser();

  if (user) {
    return user;
  }

  return redirectToLogin();
}
