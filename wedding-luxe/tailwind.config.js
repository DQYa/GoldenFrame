/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Editorial display — headlines, titles
        display: ['"Playfair Display"', '"Noto Serif SC"', 'Georgia', 'serif'],
        // Body text
        body: ['"Cormorant Garamond"', '"Noto Serif SC"', 'Georgia', 'serif'],
        // Chinese serif
        serif: ['"Noto Serif SC"', '"Playfair Display"', 'Georgia', 'serif'],
        // Decorative / luxury accents
        luxury: ['"Cinzel"', '"Playfair Display"', 'serif'],
      },
      colors: {
        // Champagne gold — the core palette
        champagne: {
          50: '#fefcf8',
          100: '#fdf8ef',
          200: '#faf0db',
          300: '#f5e3be',
          400: '#ecd096',
          500: '#d4b06a',
          600: '#b8943f',
          700: '#9a7a30',
          800: '#7d6227',
          900: '#685024',
        },
        // Warm ivory backgrounds
        ivory: {
          50: '#fefdfb',
          100: '#fdfbf7',
          200: '#faf6ef',
          300: '#f5efe3',
          400: '#ede3d2',
          500: '#d9ccb5',
          600: '#bfb097',
          700: '#a39478',
          800: '#877a62',
          900: '#6b6050',
        },
        // Deep charcoal for text
        charcoal: {
          50: '#f5f4f3',
          100: '#e8e6e3',
          200: '#d3d0cc',
          300: '#b5b0aa',
          400: '#8e8882',
          500: '#6b6560',
          600: '#54504c',
          700: '#3d3a37',
          800: '#2a2725',
          900: '#1a1817',
        },
        // Soft blush/rose accents
        blush: {
          50: '#fef9f9',
          100: '#fdf2f3',
          200: '#fae2e5',
          300: '#f4c9ce',
          400: '#e8a3ab',
          500: '#d47a85',
          600: '#b85562',
          700: '#9a3f4b',
          800: '#7d3440',
          900: '#682d37',
        },
      },
      backgroundImage: {
        'magazine-grain': "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E\")",
        'gold-gradient': 'linear-gradient(135deg, #d4b06a 0%, #ecd096 30%, #f5e3be 50%, #d4b06a 70%, #9a7a30 100%)',
        'champagne-subtle': 'linear-gradient(180deg, #fefcf8 0%, #fdf8ef 50%, #fefcf8 100%)',
      },
      boxShadow: {
        'editorial': '0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)',
        'magazine': '0 8px 40px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
        'gold-rule': '0 1px 0 rgba(180, 150, 100, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'reveal': 'reveal 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'breathe': 'breathe 8s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(48px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-1%, 0.5%)' },
          '50%': { transform: 'translate(0, 1%)' },
          '75%': { transform: 'translate(1%, 0.5%)' },
        },
      },
    },
  },
  plugins: [],
}
