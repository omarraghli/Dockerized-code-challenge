/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'smd': '900px', // Add your custom screen size and width
      },
    },
  },
  plugins: [],
}