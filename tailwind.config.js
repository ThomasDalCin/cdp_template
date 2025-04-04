/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './templates/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 12px 0px rgba(30, 29, 29, 0.20)',
        'custom-hover': ' 0px 0px 32px 0px rgba(38, 38, 38, 0.32)',
      },
      backgroundSize:{
        '55%': '55%',
        '100%': '100%'
      },
      backgroundImage: {
        'custom-gradient-mobile': 'linear-gradient(180deg, #393332 0%, #A9A09E 100%)',
        'custom-gradient-desktop': 'linear-gradient(90deg, #433C3B 0%, #A29997 100%)', 
      }
    },
  },
  plugins: [],
}

