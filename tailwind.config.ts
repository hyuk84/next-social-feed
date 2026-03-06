import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

const config: Config = {
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#135bec',
        'background-light': '#f6f6f8',
        'background-dark': '#101622',
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
    },
  },
  plugins: [forms, containerQueries],
};

export default config;
