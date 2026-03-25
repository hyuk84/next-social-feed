type SocialLoginButtonsProps = {
  onGoogleLogin?: () => void;
  onAppleLogin?: () => void;
  onKakaoLogin?: () => void;
};

export function SocialLoginButtons({
  onGoogleLogin,
  onAppleLogin,
  onKakaoLogin,
}: SocialLoginButtonsProps) {
  return (
    <div className="mb-8 flex flex-col gap-3">
      <button
        type="button"
        onClick={onGoogleLogin}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        <GoogleIcon />
        <span>Continue with Google</span>
      </button>

      <button
        type="button"
        onClick={onAppleLogin}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-black px-4 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
      >
        <AppleIcon />
        <span>Continue with Apple</span>
      </button>

      <button
        type="button"
        onClick={onKakaoLogin}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#FEE500] px-4 text-sm font-medium text-[#191919] transition hover:brightness-95"
      >
        <KakaoIcon />
        <span>Continue with Kakao</span>
      </button>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 fill-current"
      aria-hidden="true"
    >
      <path d="M16.37 12.19c.02 2.17 1.9 2.89 1.92 2.9-.02.05-.3 1.03-1 2.04-.6.87-1.22 1.73-2.2 1.75-.96.02-1.27-.57-2.37-.57-1.1 0-1.45.55-2.35.59-.95.04-1.68-.95-2.29-1.81-1.24-1.79-2.18-5.05-.91-7.25.63-1.09 1.76-1.79 2.99-1.81.93-.02 1.81.63 2.37.63.56 0 1.61-.78 2.72-.67.47.02 1.78.19 2.62 1.42-.07.04-1.56.91-1.54 2.78Zm-2.03-5.84c.5-.61.84-1.46.75-2.3-.72.03-1.59.48-2.1 1.08-.46.53-.87 1.39-.76 2.21.8.06 1.61-.41 2.11-.99Z" />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 fill-current"
      aria-hidden="true"
    >
      <path d="M12 3C6.477 3 2 6.582 2 11.001c0 2.796 1.797 5.254 4.518 6.682l-1.146 4.182a.38.38 0 0 0 .57.424l5-3.307c.349.034.7.051 1.058.051 5.523 0 10-3.582 10-8.001S17.523 3 12 3Z" />
    </svg>
  );
}
