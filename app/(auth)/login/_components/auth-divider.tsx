type AuthDividerProps = {
  label: string;
};

export function AuthDivider({ label }: AuthDividerProps) {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-white dark:bg-slate-900 text-slate-500 font-medium">
          {label}
        </span>
      </div>
    </div>
  );
}
