'use client';

import { useLoginEmail } from '@/app/features/auth/hooks/use-login-email';
import { AuthInputField } from '../../_components/auth-input-field';
import { PasswordField } from '../../_components/password-field';
import {
  LoginFormValues,
  loginSchema,
} from '@/app/features/auth/schemas/login.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export function LoginForm() {
  const loginEmailMutation = useLoginEmail();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (values: LoginFormValues) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      await loginEmailMutation.mutateAsync(payload);
    } catch {
      return;
    }
  };

  const isLoading = isSubmitting || loginEmailMutation.isPending;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <AuthInputField
        id="email"
        label="Email Address"
        type="email"
        placeholder="name@example.com"
        icon="mail"
        error={errors.email?.message}
        {...register('email')}
      />
      <PasswordField
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register('password')}
      />
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
      {loginEmailMutation.isError ? (
        <p className="text-sm text-red-500">
          {loginEmailMutation.error.response?.data?.message ??
            'Something went wrong while login your account'}
        </p>
      ) : null}
      {loginEmailMutation.isSuccess ? (
        <p className="text-sm text-green-600">
          Your account has been login successfully.
        </p>
      ) : null}
      <button
        className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
        type="submit"
        disabled={isLoading}
      >
        Login to Account
      </button>
    </form>
  );
}
