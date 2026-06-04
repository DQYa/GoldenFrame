/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Warm rounded sans-serif for headings
        display: ['"Nunito"', '"Noto Serif SC"', 'system-ui', 'sans-serif'],
        // Chinese serif
        serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
        // Handwritten decorative
        script: ['"Dancing Script"', 'cursive'],
        // Body
        body: ['"Nunito"', '"Noto Serif SC"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Core warm palette
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf3e8',
          300: '#f5e9d5',
          400: '#eddbc0',
          500: '#dcc8a0',
          600: '#c4ab80',
          700: '#a68d64',
          800: '#8a7350',
          900: '#6b5a42',
        },
        // Soft apricot/peach
        apricot: {
          50: '#fef9f6',
          100: '#fdf2ec',
          200: '#fae3d5',
          300: '#f5ccb5',
          400: '#edae8e',
          500: '#d98b66',
          600: '#b86d4a',
          700: '#965536',
          800: '#7d442a',
          900: '#683824',
        },
        // Warm milk white
        milk: {
          50: '#fefefe',
          100: '#fdfcf9',
          200: '#faf8f2',
          300: '#f5f2e8',
          400: '#ede8d8',
          500: '#d9d1bb',
          600: '#bfb59d',
          700: '#a3987e',
          800: '#877d66',
          900: '#6b6350',
        },
        // Soft sage green accent
        sage: {
          50: '#f8faf7',
          100: '#f0f4ed',
          200: '#e0e9d8',
          300: '#c8d7ba',
          400: '#a8c094',
          500: '#84a36e',
          600: '#668551',
          700: '#4f6a3e',
          800: '#405633',
          900: '#34472a',
        },
        // Warm brown for text
        warm: {
          50: '#f8f5f2',
          100: '#f0ebe6',
          200: '#e0d8d0',
          300: '#c8bdb2',
          400: '#a89888',
          500: '#8c7a68',
          600: '#6e5f50',
          700: '#55483d',
          800: '#3d332c',
          900: '#2a221d',
        },
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.55' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E\")",
        'dot-pattern': "radial-gradient(circle, rgba(200,180,150,0.15) 1px, transparent 1px)",
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(100, 80, 60, 0.06), 0 1px 4px rgba(100, 80, 60, 0.03)',
        'card': '0 4px 20px rgba(100, 80, 60, 0.07), 0 1px 3px rgba(100, 80, 60, 0.04)',
        'sticker': '0 2px 8px rgba(100, 80, 60, 0.08), 0 1px 2px rgba(100, 80, 60, 0.04)',
        'stamp': '0 1px 4px rgba(100, 80, 60, 0.1), inset 0 0 0 2px rgba(255,255,255,0.6)',
      },
      borderRadius: {
        'soft': '1rem',
        'card': '1.25rem',
        'pill': '999px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'breathe': 'breathe 6s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
