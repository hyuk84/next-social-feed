import 'server-only';

const APP_ENV_VALUES = ['local', 'dev', 'prod'] as const;

export type AppEnv = (typeof APP_ENV_VALUES)[number];

function isAppEnv(value: string): value is AppEnv {
  return APP_ENV_VALUES.some((appEnv) => appEnv === value);
}

function resolveAppEnv(): AppEnv {
  const value = process.env.APP_ENV;

  if (!value) {
    return process.env.NODE_ENV === 'production' ? 'prod' : 'local';
  }

  if (!isAppEnv(value)) {
    throw new Error(
      `Invalid APP_ENV "${value}". Expected one of: ${APP_ENV_VALUES.join(', ')}.`,
    );
  }

  return value;
}

const appEnv = resolveAppEnv();
const backendBaseUrl = process.env.BACKEND_BASE_URL;

if (!backendBaseUrl) {
  throw new Error(
    `Missing BACKEND_BASE_URL for APP_ENV="${appEnv}". Set it in the matching env file.`,
  );
}

export const serverEnv = {
  appEnv,
  backendBaseUrl,
} as const;
