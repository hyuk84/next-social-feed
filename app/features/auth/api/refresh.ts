import { clientApi } from '@/app/shared/lib/http/client-api';

export type RefreshResponse = {
  user: {
    id: string;
    email: string;
    userName: string;
    displayName: string;
  } | null;
};

export async function refresh() {
  const { data } = await clientApi.post<RefreshResponse>('/auth/refresh');
  return data;
}
