/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: 0, height: 0 },
          '100%': { opacity: 1, height: '100%' },
        },
        'show-mobile-nav': {
          '0%': { opacity: 0, top: '-100vh' },
          '100%': { opacity: 1, top: '0' },
        },
        'hide-mobile-nav': {
          '0%': { top: '0' },
          '100%': { top: '-100vh' },
        },
        'opacity-show': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'bottom-slide-show': {
          '0%': {
            opacity: 0,
            transform: 'translateY(19%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'left-slide': {
          '0%': {
            opacity: 0,
            left: '50%',
          },
          '100%': {
            opacity: 1,
            left: '10%',
          },
        },
      },
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '400px' },
      },
      fontSize: {
        title: ['23px', { lineHeight: '27px', fontWeight: '600' }],
        main: ['17px', { lineHeight: '27px', fontWeight: '500' }],
      },
      colors: {
        inpyung: '#1A659D',
        gray : '#9ca3af',
      },
      animation: {
        show: 'show 700ms',
        'opacity-show': 'opacity-show 2s',
        'bottom-slide-show': 'bottom-slide-show 500ms forwards',
        'left-slide': 'left-slide 700ms forwards',
        'show-mobile-nav': 'show-mobile-nav 500ms forwards',
        'hide-mobile-nav': 'hide-mobile-nav 500ms forwards',
      },
    },
  },
  plugins: [],
};
