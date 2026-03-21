import { authenticatedServerFetch } from '@/app/shared/lib/http/server-auth-fetch';
import { toAuthenticatedNextJsonResponse } from '@/app/shared/lib/http/to-authenticated-next-json-response';
import { NextResponse } from 'next/server';
import { createInternalServerErrorBody } from '@/app/shared/lib/http/http-error';
import { USERS_API_PATHS } from '../users-api-paths';

export async function GET() {
  try {
    const result = await authenticatedServerFetch({
      path: USERS_API_PATHS.USERS_ME,
      method: 'GET',
    });

    return toAuthenticatedNextJsonResponse(result);
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
