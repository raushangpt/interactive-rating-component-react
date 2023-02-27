/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
      },
    },
  },
  plugins: [
    // require('daisyui')
  ],
};
