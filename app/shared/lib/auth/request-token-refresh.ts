import { AUTH_API_PATHS } from '@/app/api/auth/auth-api-paths';

type TokenRefreshResponseBody = {
  accessToken?: unknown;
  refreshToken?: unknown;
};

type RequestTokenRefreshParams = {
  backendBaseUrl: string;
  refreshToken: string;
  fetcher?: typeof fetch;
};

export type TokenRefreshResult = {
  response: Response;
  accessToken?: string;
  refreshToken?: string;
};

function getRefreshedTokens(data: unknown) {
  const refreshData = data as TokenRefreshResponseBody | null;

  return {
    accessToken:
      typeof refreshData?.accessToken === 'string'
        ? refreshData.accessToken
        : undefined,
    refreshToken:
      typeof refreshData?.refreshToken === 'string'
        ? refreshData.refreshToken
        : undefined,
  };
}

export async function requestTokenRefresh({
  backendBaseUrl,
  refreshToken,
  fetcher = fetch,
}: RequestTokenRefreshParams): Promise<TokenRefreshResult | null> {
  const response = await fetcher(`${backendBaseUrl}${AUTH_API_PATHS.AUTH_REFRESH}`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refreshToken,
    }),
    cache: 'no-store',
  }).catch(() => null);

  if (!response) {
    return null;
  }

  const data = await response.json().catch(() => null);

  return {
    response,
    ...getRefreshedTokens(data),
  };
}
