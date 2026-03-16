'use client';

import { useState } from 'react';
import type { InputHTMLAttributes } from 'react';

type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function PasswordField({
  label = 'Password',
  name = 'password',
  placeholder = '••••••••',
  error,
  ...props
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="px-1 text-sm font-semibold text-slate-900 dark:text-slate-100"
      >
        {label}
      </label>

      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">
          lock
        </span>

        <input
          id={name}
          name={name}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={`h-14 w-full rounded-xl border bg-white pl-12 pr-12 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-slate-800/50 dark:text-slate-100 ${
            error
              ? 'border-red-400 focus:ring-red-400 dark:border-red-500'
              : 'border-slate-200 focus:ring-primary dark:border-slate-700'
          }`}
          {...props}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-primary"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <span className="material-symbols-outlined text-xl">
            {showPassword ? 'visibility_off' : 'visibility'}
          </span>
        </button>
      </div>

      {error && <p className="px-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
