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
            themeBlue: '#1C40BF',
            gainSbro: '#D6D9E8',
            outerSpace: '#3F4754',
            emerald: '#1EAC7A',
            orange: '#FF6C2C'
        },
        boxShadow:{
            emeraldLike: '0 18px 32px 0 rgba(30,172,122,.2)'
        }
    },
  },
  plugins: [],
}