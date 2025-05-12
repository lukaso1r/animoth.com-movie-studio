/** @type {import('tailwindcss').Config} */
export default {
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
        '.videoFullScreen': {
          position: 'fixed',
          zIndex: '50',
          top: '0%',
          left: '0%',
          width: '100%',
          height: '100%',
          padding: '2% 2%',
          backgroundColor: '#000000d4;',
          boxShadow: 'inset 0px 0px 46px 18px #ffffff66',
          transition: 'all 0.7s ease-in-out',
            transform: 'translate(0%, 0%) scale(1)',
            '&.active': {
            transform: 'translate(0%, 0%) scale(0)',
            },

        },
        
      })
    },
  ],
}

