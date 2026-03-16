export type ErrorResponseBody = {
  code: string;
  message: string;
  details?: unknown;
};

export function createInternalServerErrorBody(
  message = 'Internal server error',
): ErrorResponseBody {
  return {
    code: 'INTERNAL_SERVER_ERROR',
    message,
    details: null,
  };
}
