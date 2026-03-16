import { clientApi } from '@/app/shared/lib/http/client-api';

export type LogoutResponse = {
  message?: string;
};

export async function logout() {
  const { data } = await clientApi.post<LogoutResponse>('/auth/logout');
  return data;
}
