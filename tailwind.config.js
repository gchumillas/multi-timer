const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light': colors.gray[200],
        'dark': colors.black,
        'green-0': colors.green[300],
        'red-0': colors.red[300],
      },
    },
  },
  plugins: [],
}
