/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#D1FAF4',
          100: '#B4FDF2',
          200: '#83FCEA',
          300: '#51FBE1',
          400: '#1FFAD9',
          500: '#05E0C0',
          600: '#04AE95',
          700: '#037C6A',
          800: '#024B40',
          900: '#011915',
        },
        secondary: {
          50: '#FFF2DB',
          100: '#FFDFA8',
          200: '#FFCC75',
          300: '#FFB941',
          400: '#FFA70F',
          500: '#DB8B00',
          600: '#A86A00',
          700: '#754A00',
          800: '#422A00',
          900: '#0F0A00',
        },
        neutral: {
          50: '#F2F2F2',
          100: '#E3E3E3',
          200: '#C9C9C9',
          300: '#B0B0B0',
          400: '#969696',
          500: '#7D7D7D',
          600: '#636363',
          700: '#4A4A4A',
          800: '#303030',
          900: '#171717',
        },
        pure: {
          white: '#FFFFFF',
          black: '#000000',
        },
      },
      backgroundColor: {
        'teal-Nav': '#F6FAFB',
        'green-button': '#20B486',
      },
      textColor: {
        'green-text': '#56BC80',
      },
    },
  },
  plugins: [],
};
