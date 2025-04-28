// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      keyframes: {
        sparkleFloat: {
          '0%': { transform: 'translate(0, 0)', opacity: '1' },
          '50%': { transform: 'translate(-10px, -10px)', opacity: '0.6' },
          '100%': { transform: 'translate(10px, 10px)', opacity: '1' },
        },
      },
      animation: {
        sparkleFloat: 'sparkleFloat 2s ease-in-out infinite',
        'slide-fade': 'slideFade 0.4s ease-out',
        marquee: 'marquee 20s linear infinite',
      },

      slideFade: {
        '0%': { opacity: '0', transform: 'translateX(20px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      marquee: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
  plugins: [],
};

export default config;
