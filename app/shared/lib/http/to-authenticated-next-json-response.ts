import { applyAuthCookieMutation } from '@/app/shared/lib/auth/auth-cookie-mutation';
import {
  type AuthenticatedServerFetchResult,
} from './server-auth-fetch';
import { toNextJsonResponse } from './to-next-json-response';

export async function toAuthenticatedNextJsonResponse(
  result: AuthenticatedServerFetchResult,
) {
  const nextResponse = await toNextJsonResponse(result.response);

  applyAuthCookieMutation(nextResponse, result.authCookies);

  return nextResponse;
}
