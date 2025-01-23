/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        terracotta: '#E2725B',
        miso: '#FFD8A8',
        beige: {
          50: '#FFF5E6',
          100: '#FFE8CC',
          200: '#FFD199',
          300: '#FFBA66',
          400: '#FFA333',
          500: '#FF8C00',
          600: '#CC7000',
          700: '#995400',
          800: '#663800',
          900: '#331C00',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Open Sans', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

