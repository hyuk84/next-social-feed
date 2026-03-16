import { NextResponse } from 'next/server';
import { AUTH_API_PATHS } from '../auth-api-paths';
import { serverFetch } from '@/app/shared/lib/http/server-fetch';
import { createInternalServerErrorBody } from '@/app/shared/lib/http/http-error';

const AUTH_REQUIRED = true;

export async function POST() {
  try {
    const response = await serverFetch({
      path: AUTH_API_PATHS.AUTH_LOGOUT,
      method: 'POST',
      requireAuth: AUTH_REQUIRED,
    });

    const data = await response.json().catch(() => null);

    const res = NextResponse.json(data, {
      status: response.status,
    });

    res.cookies.delete('accessToken');
    res.cookies.delete('refreshToken');

    return res;
  } catch {
    return NextResponse.json(
      createInternalServerErrorBody('An error occurred during logout.'),
      { status: 500 },
    );
  }
}
