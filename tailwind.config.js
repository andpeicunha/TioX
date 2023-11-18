/** @type {import('tailwindcss').Config} */
import { color } from './src/theme/color'

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tiox-ds/src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
     colors: {
      ...color
    },
    extend: {},
  },
  plugins: [],
}