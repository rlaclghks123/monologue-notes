import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
      },
      gridTemplateRows: {
        '3-equal': 'repeat(3, minmax(0, 1fr))',
      },
      height: {
        'screen-without-nav': 'calc(100vh - 64px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home-image': "url('/images/home.webp')",
      },
      colors: {
        'dark-brown': '#6E2C00',
        'light-beige': '#F7F9F9',
        'deep-green': '#2E4053',
        'bg-grey': '#f5f5f7',
        'peach-fuzz': '#febf98',
      },
    },
  },
  plugins: [],
};
export default config;
