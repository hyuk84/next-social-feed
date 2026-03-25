import { cookies } from 'next/headers';
import { AuthCookieMutation } from '@/app/shared/lib/auth/auth-cookie-mutation';
import { requestTokenRefresh } from '@/app/shared/lib/auth/request-token-refresh';
import { serverEnv } from '@/app/shared/lib/env/server-env';
import { createInternalServerErrorBody } from './http-error';
import { serverFetch, type ServerFetchOptions } from './server-fetch';

const UNAUTHORIZED_STATUS = 401;
const FORBIDDEN_STATUS = 403;

type AuthenticatedServerFetchOptions = ServerFetchOptions;

export type AuthenticatedServerFetchResult = {
  response: Response;
  authCookies?: AuthCookieMutation;
};

function createAuthHeaders(
  headers: Record<string, string> = {},
  accessToken?: string,
) {
  const nextHeaders = {
    ...headers,
  };

  if (accessToken) {
    nextHeaders.Authorization = `Bearer ${accessToken}`;
  }

  return nextHeaders;
}

async function requestWithAccessToken(
  options: AuthenticatedServerFetchOptions,
  accessToken?: string,
) {
  return serverFetch({
    ...options,
    headers: createAuthHeaders(options.headers, accessToken),
  });
}

function shouldClearCookies(status: number) {
  return status === UNAUTHORIZED_STATUS || status === FORBIDDEN_STATUS;
}

export async function authenticatedServerFetch(
  options: AuthenticatedServerFetchOptions,
): Promise<AuthenticatedServerFetchResult> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const response = await requestWithAccessToken(options, accessToken);

  if (response.status !== UNAUTHORIZED_STATUS) {
    return { response };
  }

  if (!refreshToken) {
    return {
      response,
      authCookies: accessToken ? { clear: true } : undefined,
    };
  }

  const refreshed = await requestTokenRefresh({
    backendBaseUrl: serverEnv.backendBaseUrl,
    refreshToken,
  });

  if (!refreshed) {
    return {
      response,
    };
  }

  const { response: refreshResponse } = refreshed;

  if (!refreshResponse.ok) {
    return {
      response: refreshResponse,
      authCookies: shouldClearCookies(refreshResponse.status)
        ? { clear: true }
        : undefined,
    };
  }

  const {
    accessToken: nextAccessToken,
    refreshToken: nextRefreshToken,
  } = refreshed;

  if (!nextAccessToken) {
    return {
      response: Response.json(
        createInternalServerErrorBody(
          'Token refresh succeeded without issuing a new access token.',
        ),
        { status: 500 },
      ),
    };
  }

  const retryResponse = await requestWithAccessToken(options, nextAccessToken);

  if (retryResponse.status === UNAUTHORIZED_STATUS) {
    return {
      response: retryResponse,
      authCookies: { clear: true },
    };
  }

  return {
    response: retryResponse,
    authCookies: {
      accessToken: nextAccessToken,
      refreshToken: nextRefreshToken,
    },
  };
}
