/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
       Nunito:  ["Nunito", "sans-serif"],
       },
       backgroundImage: {
        'banner-food': "url('/public/benner-food.jpeg')",
        'detail-food-sm':"url('/public/bg-food.jpeg')",
        'bg-back':"url('/public/banner-foood.jpeg')",

      }
    },
  },
  plugins: [],
}
