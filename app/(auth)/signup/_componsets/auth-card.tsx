import { ReactNode } from 'react';

type AuthCardProps = {
  children: ReactNode;
};

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="flex w-full max-w-[520px] flex-col rounded-xl border border-primary/5 bg-white p-8 shadow-xl shadow-primary/5 dark:bg-slate-900/50 md:p-12">
      {children}
    </div>
  );
}
