import { AuthCard } from './_componsets/auth-card';
import { AuthDivider } from './_componsets/auth-divider';
import { SignUpFooter } from './_componsets/signup-footer';
import { SignUpForm } from './_componsets/signup-form';
import { SignUpHeader } from './_componsets/signup-header';
import { SocialLoginButtons } from './_componsets/social-login-buttons';

export default function SignUp() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <SignUpHeader />
        <main className="flex-1 flex items-center justify-center p-6 md:py-12">
          <AuthCard>
            <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
              <h1 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                Create your account
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal">
                Join our community of millions today.
              </p>
            </div>
            <SocialLoginButtons />
            <AuthDivider label="or email signup" />
            {/* <!-- Registration Form --> */}
            <SignUpForm />
            <p className="mt-8 text-center text-sm text-slate-500">
              Joining SocialFeed means you&apos;re okay with our default
              settings. We&apos;ll send you occasional emails about our new
              features.
            </p>
          </AuthCard>
        </main>
        <SignUpFooter />
      </div>
    </div>
  );
}
