const typography = require('@tailwindcss/typography')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    container: {
      center: true,

      screens: {
        '2xl': '1440px',
      },

      padding: {
        DEFAULT: '90px',
      },
    },

    screens: {
      sm: '525px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',
      '2xl': '1440px',
      1180: '1180px',
      1060: '1060px',
      991: '991px',
      868: '868px',
    },

    extend: {
      colors: {
        navyBlue: '#060C3B',
        lightOrange: '#F6F2EB',
        darkGreen: '#40994A',
        darkBlue: '#0044F2',
        darkPink: '#F85156',
      },

      fontFamily: {
        poppins: ['Poppins'],
        dmserif: ['DM Serif Display'],
      },
    },
  },

  plugins: [typography],
}
