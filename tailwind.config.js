const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: [
      './index.html',
      './src/**/*.jsx',
      './src/**/*.js',
    ],
  },
  theme: {
    extend: {
      colors:{
        bordercolor:'#4c4c4c',
      },
      animation:{
        bareffect:'bareffect 1s ease-in-out',
      },
      keyframes:{
          bareffect:{
            '0%, 100%': { transform: 'translateY(0%)' },
           '50%': { transform: 'transform(100%)' },
          },
      },
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
