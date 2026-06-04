/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 手写感标题
        handwritten: ['"Ma Shan Zheng"', '"ZCOOL KuaiLe"', 'cursive'],
        // 英文手写
        script: ['"Caveat"', '"Ma Shan Zheng"', 'cursive'],
        // 正文衬线
        serif: ['"Noto Serif SC"', '"Source Serif 4"', 'Georgia', 'serif'],
        // 无衬线备选
        sans: ['"Noto Sans SC"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // 纸张色系
        paper: {
          50: '#fdfaf3',
          100: '#faf6ee',
          200: '#f5f0e6',
          300: '#efe8d8',
          400: '#e8dcc8',
          500: '#d4c4a8',
          600: '#bfae8e',
          700: '#a69478',
          800: '#8c7b62',
          900: '#6b5a4e',
        },
        // 墨色 - 手写字迹
        ink: {
          50: '#f5f0eb',
          100: '#e8ddd4',
          200: '#d4c4b5',
          300: '#b8a393',
          400: '#9c8472',
          500: '#7d6758',
          600: '#5e4d42',
          700: '#4a3728',
          800: '#3d2b1f',
          900: '#2c1a10',
        },
        // 温暖琥珀/怀旧金
        amber: {
          50: '#fef9f0',
          100: '#fdf0db',
          200: '#fae0b5',
          300: '#f5c982',
          400: '#efb04e',
          500: '#d9982b',
          600: '#b87a1f',
          700: '#965f1a',
          800: '#7c4d1b',
          900: '#69411c',
        },
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
        'paper-fold': 'linear-gradient(to right, rgba(0,0,0,0.02) 0%, transparent 3%, transparent 97%, rgba(0,0,0,0.02) 100%)',
      },
      boxShadow: {
        'polaroid': '2px 3px 10px rgba(0, 0, 0, 0.10), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'polaroid-hover': '4px 6px 20px rgba(0, 0, 0, 0.13), 0 2px 6px rgba(0, 0, 0, 0.08)',
        'page': '0 0 30px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.03)',
        'book-spine': '-2px 0 8px rgba(0, 0, 0, 0.08), 2px 0 8px rgba(0, 0, 0, 0.04)',
        'tape': '0 1px 2px rgba(0, 0, 0, 0.06)',
        'note': '1px 2px 8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'page-reveal': 'pageReveal 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gentle-sway': 'gentleSway 8s ease-in-out infinite',
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
        pageReveal: {
          '0%': { opacity: '0', transform: 'translateY(40px) rotateX(5deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotateX(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-6px) rotate(0.5deg)' },
          '75%': { transform: 'translateY(3px) rotate(-0.5deg)' },
        },
        gentleSway: {
          '0%, 100%': { transform: 'rotate(-0.5deg)' },
          '50%': { transform: 'rotate(0.5deg)' },
        },
      },
    },
  },
  plugins: [],
}
