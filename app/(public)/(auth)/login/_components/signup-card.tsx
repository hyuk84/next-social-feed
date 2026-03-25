import Link from 'next/link';

export function SignUpCard() {
  return (
    <div className="text-center">
      <p className="text-slate-600 dark:text-slate-400">
        Don&apos;t have an account?
        <Link
          className="text-primary font-bold hover:underline ml-1"
          href="/signup"
        >
          Sign up for free
        </Link>
      </p>
    </div>
  );
}
