import { clientApi } from '@/app/shared/lib/http/client-api';
import { User } from '../../users/types/user.types';

export type SignupEmailRequest = {
  email: string;
  password: string;
  userName: string;
  displayName: string;
};

export type SignupEmailResponse = {
  user: User | null;
};

export async function signupEmail(payload: SignupEmailRequest) {
  const { data } = await clientApi.post<SignupEmailResponse>(
    '/auth/signup/email',
    payload,
  );

  return data;
}
