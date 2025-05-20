/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],         // genera variantes dark:
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',  // incluye tus archivos Astro
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
