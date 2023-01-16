/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    fontFamily: {
      'sans': ["Karla, sans-serif"]
    },
    extend: {
      colors: {
        'cyan': {
          55: 'hsl(179, 62%, 43%)',
        },
        'cyan-light': {
          65: 'hsl(179, 47%, 52%)'
        },
        'yellow': {
          450: 'hsl(71, 73%, 54%)'
        },
        'blue-grey': {
          50: 'hsl(218, 22%, 67%)'
        },
        'light-grey': {
          50: 'hsl(204, 43%, 93%)'
        },
      }
    },
  },
  plugins: [],
}
