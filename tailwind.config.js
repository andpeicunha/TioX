/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     colors: {
      'primary': {
        'lightest': '#d2fbfb',
        'light': '#71ecef',
        'base': '#15c5ce',
        'dark': '#177a87',
        'darkest': '#1b525e',
      },
      'secondary': {
        'lightest': '#ffe2d4',
        'light': '#ff8156',
        'base': '#fc3613',
        'dark': '#c51009',
        'darkest': '#7e1010',
      },
    },
    extend: {},
  },
  plugins: [],
}