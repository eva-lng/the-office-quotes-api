/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'office': "linear-gradient(to right bottom, rgba(4, 9, 30 ,0.7), rgba(4, 9, 30 ,0.9)), url('../assets/officebg02.jpg')"
      }
    }
  },
  plugins: [],
}

