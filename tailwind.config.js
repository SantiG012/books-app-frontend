/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red':'#800000',
        'light-red':'#b40001',
      }
    },
  },
  plugins: [],
}

