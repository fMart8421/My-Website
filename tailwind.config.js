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
      },
      cursor:{
        default:"url(../public/svg/cursor/cursor.svg), auto;",
        pointer:"url(../public/svg/cursor/cursor-pointer.svg) 22 22, pointer"
      },

    },
  },
  plugins: [],
}
