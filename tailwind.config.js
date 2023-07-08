// Configs of tailwindcss
/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{tsx,jsx}",
        "./src/**/**/*.{tsx,jsx}",
        "./src/*.{tsx}",
    ],
  theme: {
    extend: {
        fontFamily: {primary: ['Yekan-Bakh', 'sans-serif']},
        colors:{
            gainSbro: '#D6D9E8',
            lighterEmerald: '#E8FAEB',
            lighterThemeBlue: '#D8EAFF',
            aliceBlue: '#F3F8FC',
            myGrey: '#ECEFF9',
            darkBlue: '#17234F',
            themeBlue: '#1C40BF',
            lightBlue: '#2D3C6F',
            outerSpace: '#3F4754',
            raven: '#737C8A',
            emerald: '#1EAC7A',
            myGreen: '#20BF55',
            orange: '#FF6C2C',
        },
        boxShadow:{
            emeraldLike: '0 18px 32px 0 rgba(30,172,122,.2)',
            blueish: '0 80px 83px 0 #DDEAF4',
            plan: '0 33px 60px 0 #CBD1E1'
        }
    },
  },
  plugins: [],
}