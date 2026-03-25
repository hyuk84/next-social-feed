type JwtPayload = {
  exp?: unknown;
};

function decodeJwtPayload(token: string) {
  const payload = token.split('.')[1];

  if (!payload) {
    return null;
  }

  try {
    const normalizedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');
    const paddedPayload = normalizedPayload.padEnd(
      Math.ceil(normalizedPayload.length / 4) * 4,
      '=',
    );
    const decodedPayload = atob(paddedPayload);

    return JSON.parse(decodedPayload) as JwtPayload;
  } catch {
    return null;
  }
}

export function isAccessTokenExpired(
  accessToken?: string,
  bufferMs = 0,
) {
  if (!accessToken) {
    return true;
  }

  const payload = decodeJwtPayload(accessToken);
  const exp = payload?.exp;

  if (typeof exp !== 'number') {
    return false;
  }

  return exp * 1000 <= Date.now() + bufferMs;
}
