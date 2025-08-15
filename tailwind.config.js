
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.25), 0 10px 30px rgba(0,0,0,0.18)',
      },
      keyframes: {
        bgshift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        bgshift: 'bgshift 24s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        reveal: 'reveal 700ms ease forwards'
      }
    },
  },
  plugins: [],
}
