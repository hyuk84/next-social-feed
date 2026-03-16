import { serverFetch } from '@/app/shared/lib/http/server-fetch';
import { toNextJsonResponse } from '@/app/shared/lib/http/to-next-json-response';
import { NextResponse } from 'next/server';
import { createInternalServerErrorBody } from '@/app/shared/lib/http/http-error';
import { USERS_API_PATHS } from '../users-api-paths';

const AUTH_REQUIRED = true;

export async function GET() {
  try {
    const response = await serverFetch({
      path: USERS_API_PATHS.USERS_ME,
      method: 'GET',
      requireAuth: AUTH_REQUIRED,
    });

    return toNextJsonResponse(response);
  } catch {
    return NextResponse.json(
      createInternalServerErrorBody(
        'An error occurred while fetching user information.',
      ),
      {
        status: 500,
      },
    );
  }
}
