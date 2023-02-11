/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    colors: {
      'orange': 'hsl(25, 97%, 53%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(217, 12%, 63%)',
      'medium-grey': 'hsl(216, 12%, 24%)',
      'dark-blue': 'hsl(213, 19%, 18%)',
      'very-dark-blue': 'hsl(216, 12%, 8%)',
    },
    fontFamily: {
      'overpass': ['Overpass', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
