/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,tsx,jsx}',
    './components/**/*.{js,ts,tsx,jsx}',
  ],
  theme: {
    gridTemplateColumns: {
      'auto-fill': 'repeat(auto-fill,minmax(200px,1fr))',
    },
    extend: {
      height: {
        128: '40rem',
      },
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
    minHeight: {
      128: '40rem',
    },
    minWidth: {
      '1/3': '33%',
    },
  },
  plugins: [],
}
