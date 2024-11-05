/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
         '0%, 100%': {opacity: '0'},
         '10%, 90%': {opacity: '1'}
        }
      },
      animation: {
        'fade-in-out': 'slide 24s infinite'
      }
    },
  },
  plugins: [],
}
