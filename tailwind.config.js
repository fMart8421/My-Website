/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '10%',
      }
    },
    cursor:{
      pointer:"url(../public/svg/cursor/cursor-pointer.svg) 22 22, pointer"
    },
    extend: {
      colors:{
        'dark-primary':'#111'
      }

    },
  },
  plugins: [],
}
