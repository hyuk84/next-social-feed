import { isAccessTokenExpired } from '@/app/shared/lib/auth/access-token';
import { applyAuthCookieMutation } from '@/app/shared/lib/auth/auth-cookie-mutation';
import { requestTokenRefresh } from '@/app/shared/lib/auth/request-token-refresh';
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_AUTH_PATHS = new Set(['/login', '/signup']);
const PROTECTED_PATHS = new Set(['/']);
const ACCESS_TOKEN_REFRESH_BUFFER_MS = 30_000;
const UNAUTHORIZED_STATUS = 401;
const FORBIDDEN_STATUS = 403;

function getBackendBaseUrl() {
  const backendBaseUrl = process.env.BACKEND_BASE_URL;

  if (!backendBaseUrl) {
    throw new Error('Missing BACKEND_BASE_URL.');
  }

  return backendBaseUrl;
}

function isPublicAuthPath(pathname: string) {
  return PUBLIC_AUTH_PATHS.has(pathname);
}

function isProtectedPath(pathname: string) {
  return PROTECTED_PATHS.has(pathname);
}

function shouldClearAuthCookies(status?: number) {
  return status === UNAUTHORIZED_STATUS || status === FORBIDDEN_STATUS;
}

function createLoginRedirect(request: NextRequest, clear = false) {
  const response = NextResponse.redirect(new URL('/login', request.url));

  if (clear) {
    applyAuthCookieMutation(response, { clear: true });
  }

  return response;
}

function createAuthPageResponse(clear = false) {
  const response = NextResponse.next();

  if (clear) {
    applyAuthCookieMutation(response, { clear: true });
  }

  return response;
}

function serializeRequestCookies(
  request: NextRequest,
  accessToken: string,
  refreshToken?: string,
) {
  const cookieMap = new Map(
    request.cookies.getAll().map(({ name, value }) => [name, value]),
  );

  cookieMap.set('accessToken', accessToken);

  if (typeof refreshToken === 'string') {
    cookieMap.set('refreshToken', refreshToken);
  }

  return Array.from(cookieMap.entries())
    .map(([name, value]) => `${name}=${encodeURIComponent(value)}`)
    .join('; ');
}

function createAuthenticatedResponse(
  request: NextRequest,
  accessToken: string,
  refreshToken?: string,
) {
  const headers = new Headers(request.headers);
  const cookieHeader = serializeRequestCookies(
    request,
    accessToken,
    refreshToken,
  );

  headers.set('cookie', cookieHeader);

  const response = NextResponse.next({
    request: {
      headers,
    },
  });

  applyAuthCookieMutation(response, {
    accessToken,
    refreshToken,
  });

  return response;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const publicAuthPath = isPublicAuthPath(pathname);
  const protectedPath = isProtectedPath(pathname);

  if (!publicAuthPath && !protectedPath) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  if (!accessToken && !refreshToken) {
    return protectedPath ? createLoginRedirect(request) : NextResponse.next();
  }

  const accessTokenExpired = isAccessTokenExpired(
    accessToken,
    ACCESS_TOKEN_REFRESH_BUFFER_MS,
  );

  if (!accessToken || accessTokenExpired) {
    if (!refreshToken) {
      return protectedPath
        ? createLoginRedirect(request, Boolean(accessToken))
        : createAuthPageResponse(Boolean(accessToken));
    }

    const refreshed = await requestTokenRefresh({
      backendBaseUrl: getBackendBaseUrl(),
      refreshToken,
    });
    const clearCookies = shouldClearAuthCookies(refreshed?.response.status);

    if (!refreshed || !refreshed.response.ok || !refreshed.accessToken) {
      return protectedPath
        ? createLoginRedirect(request, clearCookies)
        : createAuthPageResponse(clearCookies);
    }

    return createAuthenticatedResponse(
      request,
      refreshed.accessToken,
      refreshed.refreshToken,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/signup'],
};
