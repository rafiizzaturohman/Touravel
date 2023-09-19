import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin';
import { Raleway } from 'next/font/google';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 5px theme("colors.sky.700"), 0 0 10px theme("colors.sky.500")'
      }
    },
    screens: {
      '2xs': '480px',
      'xs': '640px',
      'sm': '768px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    fontFamily :{
      'raleway': `${Raleway}`
    }
  },
  plugins: [
      plugin(({theme, addUtilities}) => {
        const neonUtilities: any = {};
        const colors = theme('colors');
        for (const color in colors) {
          if (typeof colors[color] ==='object') {
            const color1 = colors[color]['200'];           
            const color2 = colors[color]['700'];
            neonUtilities[`.neon-${color}`] = {
              boxShadow: `0 0 5px ${color1}, 0 0 10px ${color2}`,
            };
          }
        }
        addUtilities(neonUtilities)
      })
  ],
}


export default config
