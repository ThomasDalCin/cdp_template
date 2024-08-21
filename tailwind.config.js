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
      }
    },
  },
  plugins: [],
}

