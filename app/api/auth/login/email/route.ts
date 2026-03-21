import { serverFetch } from '@/app/shared/lib/http/server-fetch';
import { NextRequest, NextResponse } from 'next/server';
import { AUTH_API_PATHS } from '../../auth-api-paths';
import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from '@/app/shared/lib/auth/cookie-options';
import { createInternalServerErrorBody } from '@/app/shared/lib/http/http-error';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await serverFetch({
      path: AUTH_API_PATHS.AUTH_LOGIN_EMAIL,
      method: 'POST',
      body,
    });

    const data = await response.json().catch(() => null);
    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    const accessToken = data?.accessToken as string | undefined;
    const refreshToken = data?.refreshToken as string | undefined;

    const res = NextResponse.json(
      {
        user: data?.user ?? null,
      },
      { status: 200 },
    );

    if (accessToken) {
      res.cookies.set('accessToken', accessToken, accessTokenCookieOptions);
    }
    if (refreshToken) {
      res.cookies.set('refreshToken', refreshToken, refreshTokenCookieOptions);
    }
    return res;
  } catch {
    return NextResponse.json(
      createInternalServerErrorBody(
        'An error occurred while processing the login request.',
      ),
      {
        status: 500,
      },
    );
  }
}
