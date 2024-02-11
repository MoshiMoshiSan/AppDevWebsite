/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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

