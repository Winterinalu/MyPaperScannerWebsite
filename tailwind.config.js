/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      colors: {
        paper: '#F7FAFF',
        ink: '#1B1B2F',
        blue: { 700: '#2F6FED', 800: '#2459c4' },
        green: { 400: '#21C15C', 500: '#159447' },
        yellow: '#FFC93C'
      },
      fontFamily: { sans: ['Nunito', 'ui-sans-serif', 'sans-serif'] }
    }
  },
  plugins: []
};
