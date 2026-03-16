export default function Login() {
  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col lg:flex-row w-full max-w-[1200px] min-h-[800px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden">
        {/* <!-- Left Side: Visual/Illustration --> */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-primary/10 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center opacity-90 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-ZD2YwzYTVTkdfQcNJk0evXq9EHLTu50kXJ7DIo7RCx4l3wJCJRRaupzhF2IUo4U9LcUAZL43UzqBv5YUTznwBavPisw-0zrcbQtwtCc2XfWqQp96_z3lrrzx-gn8xBQAlsSMk48FQOJcZhomJT3jxkX07qinkrL37uL7TVVINmnlf-Vjw9icVZmFdlYHPaE26CMAcweNaIjg3muAA98eNSTZ_-T1MCh3kG-8Wmw_Kp2vsOoUUl5puG71jlCcgKcBz-hu4DXDtfQb')]"
            data-alt="Group of diverse creators collaborating in a modern studio"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent z-10"></div>
          <div className="relative z-20 flex flex-col justify-end p-16 text-white h-full">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-lg">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                SocialFeed
              </span>
            </div>
            <h1 className="text-5xl font-black leading-tight mb-4">
              The home of digital creators.
            </h1>
            <p className="text-lg text-white/80 max-w-md">
              Join thousands of creators sharing their moments and stories with
              the world. Your journey starts here.
            </p>
          </div>
        </div>
        {/* <!-- Right Side: Auth Form --> */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
          <div className="max-w-[420px] mx-auto w-full">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Welcome Back
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Please enter your details to sign in to your account.
              </p>
            </div>
            <form className="space-y-5">
              {/* <!-- Username Field (Conditional/Visible in Signup mode - shown here for layout demo) -->
            <!-- <div className="hidden">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Username</label>
                        <input type="text" placeholder="Choose a unique username" className="w-full px-4 py-3.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                    </div> --> */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="example@email.com"
                  type="email"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  <a
                    className="text-xs font-bold text-primary hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      visibility
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  className="w-5 h-5 rounded text-primary border-slate-300 focus:ring-primary cursor-pointer"
                  id="remember"
                  type="checkbox"
                />
                <label
                  className="ml-3 text-sm text-slate-600 dark:text-slate-400 cursor-pointer"
                  htmlFor="remember"
                >
                  Stay logged in
                </label>
              </div>
              <button
                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
                type="submit"
              >
                Login to Account
              </button>
            </form>
            {/* <!-- Divider --> */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-slate-900 text-slate-500 font-medium">
                  Or continue with
                </span>
              </div>
            </div>
            {/* <!-- Social Logins --> */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <button className="flex items-center justify-center py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  ></path>
                </svg>
              </button>
              <button className="flex items-center justify-center py-3 px-4 bg-kakao rounded-lg hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-slate-900 text-[24px] fill-current">
                  chat_bubble
                </span>
              </button>
              <button className="flex items-center justify-center py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <svg
                  className="w-5 h-5 dark:fill-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.96.95-2.04 1.83-3.14 1.83-1.07 0-1.48-.68-2.73-.68-1.24 0-1.74.65-2.69.65-1.05 0-2.25-.97-3.23-1.97C3.17 17.92 1.9 14.54 1.9 11.5c0-4.66 3.01-7.1 5.92-7.1 1.54 0 2.85.98 3.84.98 1 0 2.45-1.12 4.24-1.12 1.84 0 4.23.95 5.56 2.81-2.9 1.67-2.42 5.72.63 7.02-.92 2.27-2.18 4.31-3.04 6.19zM15.42 2.84c-.79 1-2.13 1.76-3.28 1.66-.14-1.16.48-2.43 1.25-3.34 1.13-1.24 2.58-1.9 3.47-2.16.1 1.29-.65 2.84-1.44 3.84z"></path>
                </svg>
              </button>
            </div>
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Don't have an account?
                <a
                  className="text-primary font-bold hover:underline ml-1"
                  href="#"
                >
                  Sign up for free
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
