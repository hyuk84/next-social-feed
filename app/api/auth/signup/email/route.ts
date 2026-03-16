import { serverFetch } from '@/app/shared/lib/http/server-fetch';
import { NextRequest, NextResponse } from 'next/server';
import { AUTH_API_PATHS } from '../../auth-api-paths';
import { toNextJsonResponse } from '@/app/shared/lib/http/to-next-json-response';
import { createInternalServerErrorBody } from '@/app/shared/lib/http/http-error';

const AUTH_REQUIRED = false;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await serverFetch({
      path: AUTH_API_PATHS.AUTH_SIGNUP_EMAIL,
      method: 'POST',
      body,
      requireAuth: AUTH_REQUIRED,
    });

    return toNextJsonResponse(response);
  } catch {
    return NextResponse.json(
      createInternalServerErrorBody('An error occurred during sign-up.'),
      {
        status: 500,
      },
    );
  }
}
