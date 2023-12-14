import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2563eb",
          "secondary": "#4f46e5",
          "accent": "#6ee7b7",
          "neutral": "#3b82f6",
          "base-100": "#f3f4f6",
          "info": "#00d7f8",
          "success": "#00bd3f",
          "warning": "#e5b500",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
export default config
