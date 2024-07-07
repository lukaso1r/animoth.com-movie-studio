/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fadeInOut 2s ease-in-out',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      maxWidth: {
        '50%': '50%',
      },
    },
  },
  plugins: [
    require('@vidstack/react/tailwind.cjs'),
    ({ addUtilities }) => {
      addUtilities({
        '.burgerMenuSmallVideo': {
          maxWidth: '50%',
          position: 'fixed',
          zIndex: '40',
          right: '7%',
          top: '50%',
          transform: 'translateY(-50%)',
        },
      })
    },
  ],
}
