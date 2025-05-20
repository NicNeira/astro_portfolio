/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],         // genera variantes dark:
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',  // incluye tus archivos Astro
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
    animation: {
      fade: 'fadeInUp 1s both',
    },

    keyframes: {
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(2rem)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
};
