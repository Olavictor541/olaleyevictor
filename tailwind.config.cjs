/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'gasoek-one': ['Gasoek One', 'sans-serif'],
        'impact': ['Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
};