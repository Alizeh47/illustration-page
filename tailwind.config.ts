import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#B85C38',
        miso: '#F5E6D3',
        beige: {
          50: '#FAF6F1',
          100: '#F5E6D3',
          200: '#E6D5C1',
          300: '#D6C4AF',
        },
        gray: {
          900: '#171717',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#A3A3A3',
          300: '#D4D4D4',
          200: '#E5E5E5',
          100: '#F5F5F5',
          50: '#FAFAFA',
        },
        primary: {
          100: '#F5EFE6',
        }
      },
      backgroundImage: {
        'texture': "url('/texture.png')",
      },
      fontFamily: {
        sans: ['var(--font-cutive-mono)', 'monospace'],
        mono: ['var(--font-cutive-mono)', 'monospace'],
        display: ['var(--font-cutive-mono)', 'monospace'],
        body: ['var(--font-cutive-mono)', 'monospace'],
        'jolly-lodger': ['var(--font-jolly-lodger)', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

export default config;
