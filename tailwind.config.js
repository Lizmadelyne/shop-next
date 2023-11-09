
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.{html,js}",  "./src/components/**/*.{js,ts,jsx,tsx}",] ,
  theme: {
    colors:{
      ...colors,
      green: colors.esmerald,
      yellow: colors.amber,
      purple: colors.violet,

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
    
};


