/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#D1FAF4",
          100: "#B4FDF2",
          200: "#83FCEA",
          300: "#51FBE1",
          400: "#1FFAD9",
          500: "#05E0C0",
          600: "#04AE95",
          700: "#037C6A",
          800: "#024B40",
          900: "#011915",
        },
        secondary: {
          50: "#FFF2DB",
          100: "#FFDFA8",
          200: "#FFCC75",
          300: "#FFB941",
          400: "#FFA70F",
          500: "#DB8B00",
          600: "#A86A00",
          700: "#754A00",
          800: "#422A00",
          900: "#0F0A00",
        },
        neutral: {
          50: "#F2F2F2",
          100: "#E3E3E3",
          200: "#C9C9C9",
          250: "#3C3C4499",

          300: "#B0B0B0",
          400: "#969696",
          500: "#7D7D7D",
          600: "#636363",
          700: "#4A4A4A",
          800: "#303030",
          900: "#171717",
        },
        pure: {
          white: "#FFFFFF",
          black: "#000000",
        },
      },
      dropShadow: {
        businessman: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        maxWidth: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
