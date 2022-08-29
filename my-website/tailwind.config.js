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
      container: {
        padding: {
          lg: '5%',
          sm: '15%',
          xs: '20%',
        }
      },
      colors:{
        'dark-primary':'#111'
      }

    },
  },
  plugins: [],
}
