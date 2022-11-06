/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,tsx,jsx}','./components/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      height:{
        128:'40rem'
      }
    },
    fontFamily:{
      raleway:["Raleway",'sans-serif']
    }
  },
  plugins: [],
}
