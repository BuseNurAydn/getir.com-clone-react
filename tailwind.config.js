/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Projenizdeki React dosyalarını hedefleyin
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
           'mobile': 'url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)',
           'bottles': 'url(https://cdn.getir.com/getirweb_images/popup_splash.png)'
      }),
      backgroundSize: {
        'custom-small': '30% auto',
      },
      colors:{
          'brand-color': '#5d3ebc',
          'second-color':'#7849f7',
          'gray-color':'#FAFAFA',
          'yellow-color':'#ffd300',
          'light-color' :'#f0f1f3;',
      }
    },
  },
  plugins: [],
}

