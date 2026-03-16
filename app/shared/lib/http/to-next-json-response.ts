import { NextResponse } from 'next/server';

export async function toNextJsonResponse(response: Response) {
  const contentType = response.headers.get('content-type') ?? '';
  const isJson = contentType.includes('aaplication/json');
  const data = isJson ? await response.json().catch(() => null) : null;

  return NextResponse.json(data, {
    status: response.status,
  });
}
