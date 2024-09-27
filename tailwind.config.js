/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Projenizdeki React dosyalarını hedefleyin
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
          'brand-color': '#5d3ebc'
      })
    },
  },
  plugins: [],
}

