import { clientApi } from '@/app/shared/lib/http/client-api';

export type MeResponse = {
  id: string;
  email: string;
  userName: string;
  displayName: string;
};

export async function getMe() {
  const { data } = await clientApi.get<MeResponse>('/users/me');
  return data;
}
