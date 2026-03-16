import { clientApi } from '@/app/shared/lib/http/client-api';

export type LoginEmailRequest = {
  email: string;
  password: string;
};

export type LoginEmailResponse = {
  user: {
    id: string;
    email: string;
    userName: string;
    displayName: string;
  } | null;
};

export async function loginEmail(payload: LoginEmailRequest) {
  const { data } = await clientApi.post<LoginEmailResponse>(
    '/auth/login/email',
    payload,
  );

  return data;
}
