export const PUBLIC_AUTH_PATHS = ['/login', '/signup'] as const;
export const PROTECTED_PATHS = ['/'] as const;

const publicAuthPathSet = new Set<string>(PUBLIC_AUTH_PATHS);
const protectedPathSet = new Set<string>(PROTECTED_PATHS);

export function isPublicAuthPath(pathname: string) {
  return publicAuthPathSet.has(pathname);
}

export function isProtectedPath(pathname: string) {
  return protectedPathSet.has(pathname);
}
