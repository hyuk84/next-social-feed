import type { InputHTMLAttributes } from 'react';

type TermsAgreementProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export function TermsAgreement({
  error,
  id = 'terms',
  name = 'terms',
  ...props
}: TermsAgreementProps) {
  return (
    <div className="flex items-start gap-3 mt-2 px-1">
      <input
        id={id}
        name={name}
        type="checkbox"
        aria-invalid={!!error}
        className="mt-1 rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
        {...props}
      />
      <label htmlFor="terms" className="text-xs text-slate-500 leading-normal">
        I agree to the
        <a className="text-primary font-bold hover:underline" href="#">
          Terms of Service
        </a>
        and
        <a className="text-primary font-bold hover:underline" href="#">
          Privacy Policy
        </a>
        .
      </label>
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
    </div>
  );
}
