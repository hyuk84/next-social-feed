import type { InputHTMLAttributes } from 'react';

type AuthInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: string;
  hint?: string;
  error?: string;
};

export function AuthInputField({
  label,
  icon,
  hint,
  error,
  id,
  name,
  ...props
}: AuthInputFieldProps) {
  const inputId = id ?? name;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className="text-slate-900 dark:text-slate-100 text-sm font-semibold px-1"
      >
        {label}
      </label>
      <div className="relative">
        {icon ? (
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
            {icon}
          </span>
        ) : null}
        <input
          id={inputId}
          name={name}
          aria-invalid={!!error}
          className={`h-14 w-full rounded-xl border bg-white pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-slate-800/50 dark:text-slate-100 ${
            error
              ? 'border-red-400 focus:ring-red-400 dark:border-red-500'
              : 'border-slate-200 focus:ring-primary dark:border-slate-700'
          }`}
          {...props}
        />
      </div>

      {hint ? <p className="text-slate-400 text-xs px-1">{hint}</p> : null}
      {error ? <p className="px-1 text-sm text-red-500">{error}</p> : null}
    </div>
  );
}
