/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#3390EC',
        'ltHover': '#F4F4F5',
        'darkPrimary': '#766AC8',
        'darkHover': '#2C2C2C',
        'iconColor': '#707579',
        'danger': '#E53935'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}