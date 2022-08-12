/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./main.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'op__banner': "url('/assets/op__banner.jpg')",
        'cars_banner':"url('/assets/BANNER_HERO.png')",
      },
      colors: {
        'blue__button': "#1D71B8",
        'secondary':'#0F4179',
        'primary_red':'#981424',
        'darkBlue':'#042C4C',
      },
    },
  },
  plugins: [],
}

