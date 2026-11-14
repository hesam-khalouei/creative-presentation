// tailwind.config.js
const tailwindConfig = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['IRANYekanXVF', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
        heavy: '950',
      },
      colors: {
        // رنگ اصلی برند بر پایه #00A693
        primary: {
          DEFAULT: '#00A693',
          50: '#effef9',
          100: '#c8fff0',
          200: '#92fee2',
          300: '#53f5d0',
          400: '#1fe2ba',
          500: '#00A693',
          600: '#008c7c',
          700: '#047065',
          800: '#095951',
          900: '#0c4944',
          950: '#002b28',
        },
        // رنگ دوم بر پایه #FF8A34
        secondary: {
          DEFAULT: '#FF8A34',
          50: '#fff6ed',
          100: '#ffead4',
          200: '#ffd1a8',
          300: '#ffb171',
          400: '#FF8A34',
          500: '#fe6711',
          600: '#ef4c07',
          700: '#c63708',
          800: '#9d2d0f',
          900: '#7e2710',
          950: '#441006',
        },
        surface: {
          950: '#04070d',
          900: '#090e1a',
          800: '#111827',
          700: '#1e293b',
        }
      },
      boxShadow: {
        'glow-primary': '0 0 35px -5px rgba(0, 166, 147, 0.35)',
        'glow-secondary': '0 0 35px -5px rgba(0, 138, 52, 0.35)',
        'glass': '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to left, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.tailwind = window.tailwind || {};
  window.tailwind.config = tailwindConfig;
}
if (typeof module !== 'undefined') {
  module.exports = tailwindConfig;
}