/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Projenizdeki React dosyalarını hedefleyin
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
          'brand-color': '#5d3ebc',
          'second-color':'#7849f7',
          'gray-color':'#FAFAFA'
      }),
      textColor: theme => ({
        'brand-color': '#5d3ebc',
       
    }),

    },
  },
  plugins: [],
}

