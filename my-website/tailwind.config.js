/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '10%',

      }
    },
    extend: {
      colors:{
        'dark-primary':'#111'
      }

    },
  },
  plugins: [],
}
