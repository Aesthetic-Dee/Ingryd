/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ["Montserrat Alternates", "sans-serif"]
      },
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        vibrate: 'vibrate 0.3s linear',
      },
      screens: {
        'sm': {'max': '600px'},
        'md': '640px',
        'lg': '1024px',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}

