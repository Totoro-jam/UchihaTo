// tailwind.config.js
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // 因为使用了nextUI,在这里设置，会导致tailwindcss dark模式下的效果失效
    // colors: {
    //   'white-fa': '#fafafa'
    // },
    fontFamily: {
      sans: ['custom en', 'custom zh', 'sans-serif'],
      serif: ['custom en', 'custom zh', 'serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  darkMode: ['class', '[data-theme="dark"]'], // 这里没办法做到
  // plugins: [nextui()],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            resumebg: '#fafafa',
            whitefa: '#fafafa',
            vertical: '#fff',
            'fun-pink': '#00c7ff',
            'fun-pink-darker': '#000f2e',
            'fun-pink-darkest': '#000c24',
            'fun-pink-dark': '#192742',
            'fun-pink-light': '#009ac5',
          },
        },
        dark: {
          colors: {
            resumebg: '#000',
            vertical: '#000',
          },
        },
      },
    }),
  ],
}
