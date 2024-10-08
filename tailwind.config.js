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
      }
    },
  },
  plugins: [],
}

