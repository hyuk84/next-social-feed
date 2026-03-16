import { cookies } from 'next/headers';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETED';

type ServerFetchOptions = {
  path: string;
  method?: HttpMethod;
  body?: unknown;
  requireAuth?: boolean;
  headers?: Record<string, string>;
  cache?: RequestCache;
};

export async function serverFetch({
  path,
  method = 'GET',
  body,
  requireAuth = false,
  headers = {},
  cache = 'no-store',
}: ServerFetchOptions): Promise<Response> {
  const finalHeaders: Record<string, string> = {
    ...headers,
  };

  const hasBody = body !== undefined && body !== null;
  if (hasBody) {
    finalHeaders['Content-Type'] = 'application/json';
  }

  if (requireAuth) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('accessToken')?.value;

    if (accessToken) {
      finalHeaders['Authorization'] = `Bearer ${accessToken}`;
    }
  }

  return fetch(`${process.env.BACKEND_BASE_URL}${path}`, {
    method,
    headers: finalHeaders,
    body: hasBody ? JSON.stringify(body) : undefined,
    cache,
  });
}
