/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans SC"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', '"Noto Serif SC"', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#eff4ff',
          100: '#dbe4ff',
          200: '#becfff',
          300: '#91aaff',
          400: '#5c7cfa',
          500: '#3577f0',
          600: '#1f58e5',
          700: '#1745d2',
          800: '#1939aa',
          900: '#1a3486',
        },
        warm: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d8b6',
          300: '#e9bd87',
          400: '#df9d5b',
          500: '#d7853b',
          600: '#c96e30',
          700: '#a75629',
          800: '#864528',
          900: '#6d3a24',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
