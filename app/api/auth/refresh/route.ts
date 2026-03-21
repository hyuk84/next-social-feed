import { serverFetch } from '@/app/shared/lib/http/server-fetch';
import { cookies } from 'next/headers';
import { AUTH_API_PATHS } from '../auth-api-paths';
import { NextResponse } from 'next/server';
import { applyAuthCookieMutation } from '@/app/shared/lib/auth/auth-cookie-mutation';
import { createInternalServerErrorBody } from '@/app/shared/lib/http/http-error';

const UNAUTHORIZED_STATUS = 401;
const FORBIDDEN_STATUS = 403;

export async function POST() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refreshToken')?.value;

    const response = await serverFetch({
      path: AUTH_API_PATHS.AUTH_REFRESH,
      method: 'POST',
      headers: refreshToken ? { Authorization: `Bearer ${refreshToken}` } : {},
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const res = NextResponse.json(data, { status: response.status });

      if (
        response.status === UNAUTHORIZED_STATUS ||
        response.status === FORBIDDEN_STATUS
      ) {
        applyAuthCookieMutation(res, { clear: true });
      }

      return res;
    }

    const newAccessToken = data?.accessToken as string | undefined;
    const newRefreshToken = data?.refreshToken as string | undefined;

    const res = NextResponse.json(
      {
        user: data?.user ?? null,
      },
      { status: 200 },
    );

    applyAuthCookieMutation(res, {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });

    return res;
  } catch {
    return NextResponse.json(
      createInternalServerErrorBody(
        'An error occurred while reissuing the token.',
      ),
      { status: 500 },
    );
  }
}
