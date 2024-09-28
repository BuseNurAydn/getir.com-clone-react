/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Projenizdeki React dosyalarını hedefleyin
  ],
  theme: {
    extend: {
      colors:{
          'brand-color': '#5d3ebc',
          'second-color':'#7849f7',
          'gray-color':'#FAFAFA',
          'yellow-color':'#ffd300'
      }
    },
  },
  plugins: [],
}

