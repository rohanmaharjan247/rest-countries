/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        "dark-blue": {
          400: "hsl(209, 23%, 22%)", // elements
          700: "hsl(207, 26%, 17%)", // background
          800: "hsl(200, 15%, 8%)",  // light mode text
        },
        "light-gray": {
          100: "hsl(0, 0%, 98%)", // light mode background
          800: "hsl(0, 0%, 52%)", // light mode input
        }
      }
    },
  },
  plugins: [],
}
