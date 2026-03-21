import { serverEnv } from '@/app/shared/lib/env/server-env';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ServerFetchOptions = {
  path: string;
  method?: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
  cache?: RequestCache;
};

export async function serverFetch({
  path,
  method = 'GET',
  body,
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

  return fetch(`${serverEnv.backendBaseUrl}${path}`, {
    method,
    headers: finalHeaders,
    body: hasBody ? JSON.stringify(body) : undefined,
    cache,
  });
}
