/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'waves': "url('../images/guilloche-background.png')",
        'waves-dark': "url('../images/results-waves.png')",
        'partners-results': "url('../images/partners-results.jpg')",
      }
    },
    colors: {
      ...colors,
      gold: '#d4b287',
      'gold-dark': '#af916c',
      'main-blue': '#003c55',
    },
  },
  plugins: [],
}
