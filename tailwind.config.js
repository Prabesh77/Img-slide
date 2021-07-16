// const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        main: '#449DD1'
      },
      dark: {
        blue_d: '#1D4ED8',
        bg: '#374151',
        bg_light: '#4B5563',
        white: '#F9FAFB',
        white_light: '#F3F4F6',
        blue: '#449DD1'
      },
      BG: '#F7F7FF',
      gray: '#696969',
      text: '231123',
      red: {
        main: 'red'
      }
    },
    fontFamily: {
     kufi: 'Reem Kufi'
    }
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
