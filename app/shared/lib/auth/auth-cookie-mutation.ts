import { NextResponse } from 'next/server';
import {
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
} from './cookie-options';

export type AuthCookieMutation = {
  clear?: boolean;
  accessToken?: string;
  refreshToken?: string;
};

export function applyAuthCookieMutation(
  response: NextResponse,
  mutation?: AuthCookieMutation,
) {
  if (!mutation) {
    return;
  }

  if (mutation.clear) {
    response.cookies.delete('accessToken');
    response.cookies.delete('refreshToken');
    return;
  }

  if (typeof mutation.accessToken === 'string') {
    response.cookies.set(
      'accessToken',
      mutation.accessToken,
      accessTokenCookieOptions,
    );
  }

  if (typeof mutation.refreshToken === 'string') {
    response.cookies.set(
      'refreshToken',
      mutation.refreshToken,
      refreshTokenCookieOptions,
    );
  }
}
