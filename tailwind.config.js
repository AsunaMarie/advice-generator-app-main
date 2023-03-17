/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 40px 10px #52ffa8'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        'light-cyan': '#cee3e9',
        'neon-green': '#52ffa8',
        'grayish-blue': '#4e5d73',
        'dark-grayish-blue': '#323a49',
        'dark-blue': '#1f2632'
      }
    },
  },
  plugins: [],
}
