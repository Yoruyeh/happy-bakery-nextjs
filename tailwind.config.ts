import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin-sans)'],
        sans: ['var(--font-open-sans)'],
      },
      colors: {
        bgColor: {
          body: '#FFF7E6',
          primaryBtn: '#FFB5A7',
          primaryHover: '#D4726A',
          secondaryBtn: '#A8D5BA',
          secondaryHover: '#4BAB71',
          option: '#FFF4CC',
          optionSelected: '#FFCC4B',
          optionDisabled: '#D2D1D3',
          card: '#FFE6E6',
          newTag: '#FF6F91',
          discountTag: '#FFCC4B',
          footer: '#E0F7E9',
        },
        title: {
          primary: '#FF914D',
          seconday: '#5A3E36',
        },
        text: {
          lightGray: '#6D6D6D',
          brown: '#5A3E36',
          darkGray: '#232321',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
