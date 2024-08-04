import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        '3-equal': 'repeat(3, minmax(0, 1fr))',
      },
      height: {
        'screen-without-nav': 'calc(100vh - 64px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-brown': '#402001',
        'light-beige': '#FFF8E7',
        'bg-grey': '#f5f5f7',
        'peach-fuzz': '#febf98',
      },
    },
  },
  plugins: [],
};
export default config;
