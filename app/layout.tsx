import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import { CustomIconDescriptorType } from '@/types/metadata';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
});

const icon: CustomIconDescriptorType = {
  rel: 'stylesheet',
  url: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap',
  precedence: 'default',
};

export const metadata: Metadata = {
  icons: {
    other: icon,
  },
  title: 'SocialSphere',
  description:
    'SocialSphere is a modern social media feed built with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`${plusJakartaSans.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
