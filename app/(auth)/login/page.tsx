import { SocialLoginButtons } from '../_components/social-login-buttons';
import { AuthDivider } from './_components/auth-divider';
import { LeftSide } from './_components/left-side';
import { LoginForm } from './_components/login-form';
import { SignUpCard } from './_components/signup-card';

export default function Login() {
  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col lg:flex-row w-full max-w-[1200px] min-h-[800px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden">
        <LeftSide />
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
            <LoginForm />
            {/* <!-- Divider --> */}
            <AuthDivider label="Or continue with" />
            {/* <!-- Social Logins --> */}
            <SocialLoginButtons />
            <SignUpCard />
          </div>
        </div>
      </div>
    </div>
  );
}
