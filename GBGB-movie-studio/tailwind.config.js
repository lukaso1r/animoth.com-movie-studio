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
    // eslint-disable-next-line no-undef
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
        '.socialsBoxItem': {
          cursor: 'pointer',
          boxShadow: 'inset 0 0 0 0 white',
          color: 'rgba(255, 255, 255, 0.8)',
          padding: '0 .25rem',
          margin: '0 -.25rem',
          transition: 'color .4s ease-in-out, box-shadow .4s ease-in-out',
        },
        '.socialsBoxItem:hover': {
          color: 'black',
          boxShadow: 'inset 300px 0 0 0 white',
        },
      })
    },
  ],
}
