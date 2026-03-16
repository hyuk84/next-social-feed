import { serverFetch } from '@/app/shared/lib/http/server-fetch';
import { cookies } from 'next/headers';
import { AUTH_API_PATHS } from '../auth-api-paths';
import { NextResponse } from 'next/server';
import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from '@/app/shared/lib/auth/cookie-options';
import { createInternalServerErrorBody } from '@/app/shared/lib/http/http-error';

export async function POST() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refreshToken')?.value;

    const response = await serverFetch({
      path: AUTH_API_PATHS.AUTH_REFRESH,
      method: 'POST',
      requireAuth: false,
      headers: refreshToken ? { Authorzation: `Bearer ${refreshToken}` } : {},
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    const newAccessToken = data?.accessToken as string | undefined;
    const newRefreshToken = data?.refreshToken as string | undefined;

    const res = NextResponse.json(
      {
        user: data?.user ?? null,
      },
      { status: 200 },
    );

    if (newAccessToken) {
      res.cookies.set('accessToken', newAccessToken, accessTokenCookieOptions);
    }

    if (newRefreshToken) {
      res.cookies.set(
        'refreshToken',
        newRefreshToken,
        refreshTokenCookieOptions,
      );
    }

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
