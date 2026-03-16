import { clientApi } from '@/app/shared/lib/http/client-api';

export type SignupEmailRequest = {
  email: string;
  password: string;
  userName: string;
  displayName: string;
};

export type SignupEmailResponse = {
  userId?: string;
  message?: string;
};

export async function signupEmail(payload: SignupEmailRequest) {
  const { data } = await clientApi.post<SignupEmailResponse>(
    '/auth/signup/email',
    payload,
  );

  return data;
}
