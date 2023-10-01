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
      colors: {
        customGreen: '#0C8283',
        darkGreen: '#035852',
        black: '#000',
        teal: {
          300: '#0C8283',
        },
        'bg-f5f5f5': '#f5f5f5',
        'border-BCE2E3': '#BCE2E3',
        primary: '#0C8283',
        red: {
          500: '#FF0000',
        },
        gray: {
          400: '#666',
        },
        'bg-0C8283': '#0C8283',
        'bg-0C8283-hover': '#your-hover-color',
        customColor1: '#ABCDEF',
        customColor2: '#FEDCBA',
      },
    },
  },
  plugins: [],
}

export default config
