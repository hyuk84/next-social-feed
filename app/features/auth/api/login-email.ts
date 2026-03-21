import { clientApi } from '@/app/shared/lib/http/client-api';
import { User } from '../../users/types/user.types';

export type LoginEmailRequest = {
  email: string;
  password: string;
};

export type LoginEmailResponse = {
  user: User | null;
};

export async function loginEmail(payload: LoginEmailRequest) {
  const { data } = await clientApi.post<LoginEmailResponse>(
    '/auth/login/email',
    payload,
  );

  return data;
}
