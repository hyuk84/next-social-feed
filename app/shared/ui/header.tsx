'use client';

import Image from 'next/image';
import { useMe } from '@/app/features/users/hooks/use-me';

export function Header() {
  const { data: me, isLoading } = useMe();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl filled-icon">
              layers
            </span>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              SocialSphere
            </h1>
          </div>
          <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 w-80">
            <span className="material-symbols-outlined text-slate-500 text-sm">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500"
              placeholder="Search social..."
              type="text"
            />
          </div>
        </div>
        {isLoading ? (
          <div></div>
        ) : me ? (
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </button>
            <div className="flex h-10 w-10 items-center justify-center  rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-primary/20">
              <span className="material-symbols-outlined">person</span>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
}
