type AuthDividerProps = {
  label: string;
};

export function AuthDivider({ label }: AuthDividerProps) {
  return (
    <div className="relative flex items-center mb-8">
      <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
      <span className="flex-shrink mx-4 text-xs font-semibold text-slate-400 uppercase tracking-widest">
        {label}
      </span>
      <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
    </div>
  );
}
