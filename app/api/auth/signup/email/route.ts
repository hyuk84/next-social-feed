import { serverFetch } from '@/app/shared/lib/http/server-fetch';
import { NextRequest, NextResponse } from 'next/server';
import { AUTH_API_PATHS } from '../../auth-api-paths';
import { createInternalServerErrorBody } from '@/app/shared/lib/http/http-error';
import { applyAuthCookieMutation } from '@/app/shared/lib/auth/auth-cookie-mutation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await serverFetch({
      path: AUTH_API_PATHS.AUTH_SIGNUP_EMAIL,
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
    applyAuthCookieMutation(res, {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    return res;
  } catch {
    return NextResponse.json(
      createInternalServerErrorBody('An error occurred during sign-up.'),
      {
        status: 500,
      },
    );
  }
}
