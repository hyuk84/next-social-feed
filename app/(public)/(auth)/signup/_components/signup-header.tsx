import Link from 'next/link';

export function SignUpHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-20 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="text-primary">
          <span className="material-symbols-outlined text-3xl">hub</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">
          SocialFeed
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:inline text-sm text-slate-500">
          Already have an account?
        </span>
        <Link
          href="/login"
          className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-10 px-5 border border-primary text-primary hover:bg-primary/5 text-sm font-bold transition-colors"
        >
          Log In
        </Link>
      </div>
    </header>
  );
}
