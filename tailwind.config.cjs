/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
         
        'impact': ['Impact', 'Haettenschweiler', '"Arial Narrow Bold"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};