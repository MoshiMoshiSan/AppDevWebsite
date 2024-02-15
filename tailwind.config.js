/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'custom': '1100px',
        'tmHead': '710px',
      },
    },
  },
  plugins: [],
}