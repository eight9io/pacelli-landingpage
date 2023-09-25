import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: 'rgb(var(--color-primary) / <alpha-value>)',
        // secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        primary: {
          50: '#f4f9f8',
          100: '#dcebe7',
          200: '#b8d7d0',
          300: '#8cbcb2',
          400: '#649d94',
          500: '#4a827a',
          600: '#3a6761',
          700: '#315450',
          800: '#2a4542',
          900: '#273a38',
          950: '#142423',
          DEFAULT: '#142423',
        },
        secondary: {
          50: '#edfffb',
          100: '#bffff6',
          200: '#80ffef',
          300: '#39ffe8',
          400: '#01ffd8',
          500: '#00e4c1',
          600: '#00b8a1',
          700: '#009181',
          800: '#007268',
          900: '#03554d',
          950: '#003a37',
          DEFAULT: '#03554d',
        },
        neutral: {
          50: '#F3F4F6',
          100: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          600: '#4B5563',
          800: '#111827',
          DEFAULT: '#4B5563',
        },
        base: {
          100: '#F3F4F6',
        },
        contrast: 'rgb(var(--color-contrast) / <alpha-value>)',
        notice: 'rgb(var(--color-accent) / <alpha-value>)',
        shopPay: 'rgb(var(--color-shop-pay) / <alpha-value>)',
      },
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'sm-max': {max: '48em'},
        'sm-only': {min: '32em', max: '48em'},
        'md-only': {min: '48em', max: '64em'},
        'lg-only': {min: '64em', max: '80em'},
        'xl-only': {min: '80em', max: '96em'},
        '2xl-only': {min: '96em'},
      },
      spacing: {
        nav: 'var(--height-nav)',
        'screen-without-topbar': 'calc(100vh - var(--height-nav))',
        screen: 'var(--screen-height, 100vh)',
        15: '3.75rem',
      },
      height: {
        screen: 'var(--screen-height, 100vh)',
        'screen-no-nav':
          'calc(var(--screen-height, 100vh) - var(--height-nav))',
        'screen-dynamic': 'var(--screen-height-dynamic, 100vh)',
      },
      width: {
        mobileGallery: 'calc(100vw - 3rem)',
      },
      // fontFamily: {
      //   sans: ['Urbanist', 'sans-serif'],
      //   serif: ['Quicksand', 'Palatino', 'ui-serif'],
      // },
      fontSize: {
        display: ['var(--font-size-display)', '1.1'],
        heading: ['var(--font-size-heading)', '1.25'],
        lead: ['var(--font-size-lead)', '1.333'],
        copy: ['var(--font-size-copy)', '1.5'],
        fine: ['var(--font-size-fine)', '1.333'],
      },
      maxWidth: {
        'prose-narrow': '45ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        border: 'inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)',
        darkHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)',
        lightHeader: 'inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)',
      },
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          primary: {
            50: '#f4f9f8',
            100: '#dcebe7',
            200: '#b8d7d0',
            300: '#8cbcb2',
            400: '#649d94',
            500: '#4a827a',
            600: '#3a6761',
            700: '#315450',
            800: '#2a4542',
            900: '#273a38',
            950: '#142423',
            DEFAULT: '#142423',
          },
          secondary: {
            50: '#edfffb',
            100: '#bffff6',
            200: '#80ffef',
            300: '#39ffe8',
            400: '#01ffd8',
            500: '#00e4c1',
            600: '#00b8a1',
            700: '#009181',
            800: '#007268',
            900: '#03554d',
            950: '#003a37',
            DEFAULT: '#03554d',
          },
          neutral: {
            50: '#F3F4F6',
            100: '#E5E7EB',
            300: '#D1D5DB',
            500: '#9CA3AF',
            600: '#4B5563',
            800: '#111827',
            DEFAULT: '#4B5563',
          },
          base: {
            100: '#F3F4F6',
          },
          // success: colors.green,
          // info: colors.cyan,
          // danger: colors.red,
          // warning: colors.orange,
          // light: colors.white,
          // dark: colors.black,
        },
      },
    ],
  },
  plugins: [formsPlugin, typographyPlugin, daisyui],
};
