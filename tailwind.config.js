// tailwind.config.js
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['custom en', 'custom zh', 'sans-serif'],
      serif: ['custom en', 'custom zh', 'serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}
