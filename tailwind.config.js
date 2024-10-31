/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Projenizdeki React dosyalarını hedefleyin
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
           'mobile': 'url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)',
           'bottles': 'url(https://cdn.getir.com/getirweb_images/popup_splash.png)',
           'business': 'url(https://cdn.getir.com/getirweb-images/common/partners-background.jpg)',
           'carsi' :'url(https://cdn.getir.com/getirweb_images/common/hero_posters/locals_2.jpeg)'
      }),
      backgroundSize: {
        'custom-small': '30% auto',
      },
      colors:{
          'brand-color': '#5d3ebc',
          'black-color': '#191919',
          'second-color':'#7849f7',
          'gray-color':'#FAFAFA',
          'yellow-color':'#ffd300',
          'light-color' :'#f0f1f3;',
          'graytwo-color':'#697488',
          

      }
    },
  },
  plugins: [],
}

