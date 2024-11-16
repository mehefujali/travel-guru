/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        homeBg: 'url(../../src/assets/images/Rectangle 1.png)'
      },
      fontFamily:{
        bebes: '"Bebas Neue", sans-serif'
      }
    },
  },
  plugins: [require('daisyui'),],
}

