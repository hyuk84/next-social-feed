'use client';

import { useForm } from 'react-hook-form';
import { useSignupEmail } from '@/app/features/auth/hooks/use-signup-email';
import { AuthInputField } from '../../_components/auth-input-field';
import { PasswordField } from '../../_components/password-field';
import { TermsAgreement } from './terms-agreement';
import {
  SignFormValues,
  signupSchema,
} from '@/app/features/auth/schemas/signup.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export function SignUpForm() {
  const signupEmailMutation = useSignupEmail();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      displayName: '',
      userName: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    mode: 'onBlur',
  });

  const onSubmit = async (values: SignFormValues) => {
    const payload = {
      email: values.email,
      password: values.password,
      userName: values.userName,
      displayName: values.displayName,
    };

    try {
      await signupEmailMutation.mutateAsync(payload);
    } catch {
      return;
    }
  };

  const isLoading = isSubmitting || signupEmailMutation.isPending;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <AuthInputField
        id="email"
        label="Email Address"
        type="email"
        placeholder="name@example.com"
        icon="mail"
        error={errors.email?.message}
        {...register('email')}
      />
      <AuthInputField
        id="displayName"
        label="Display Name"
        type="text"
        placeholder="John Doe"
        icon="person"
        error={errors.displayName?.message}
        {...register('displayName')}
      />
      <AuthInputField
        id="userName"
        label="User ID"
        type="text"
        placeholder="username"
        icon="alternate_email"
        hint="Don't worry, you can change your User ID later."
        error={errors.userName?.message}
        {...register('userName')}
      />
      <PasswordField
        label="Password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register('password')}
      />
      <PasswordField
        label="Confirm Password"
        placeholder="Re-enter your password"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <TermsAgreement error={errors.terms?.message} {...register('terms')} />

      {signupEmailMutation.isError ? (
        <p className="text-sm text-red-500">
          {signupEmailMutation.error.response?.data?.message ??
            'Something went wrong while creating your account'}
        </p>
      ) : null}

      {signupEmailMutation.isSuccess ? (
        <p className="text-sm text-green-600">
          Your account has been created successfully.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isLoading}
        className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 bg-primary text-white text-base font-bold transition-all hover:opacity-90 active:scale-[0.98] mt-4 shadow-lg shadow-primary/25"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
}
