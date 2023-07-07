// Configs of tailwindcss
/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{tsx,jsx}",
        "./src/*.{tsx}",
    ],
  theme: {
    extend: {
        fontFamily: {primary: ['Yekan-Bakh', 'sans-serif']},
        colors:{
            darkBlue: '#17234F',
            themeBlue: '#1C40BF'
        }
    },
  },
  plugins: [],
}