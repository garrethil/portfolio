/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px", // Ensure '1' is defined for 1px border width
      },
      colors: {
        primary: {
          DEFAULT: "#5F6F65", // Header and Footer Background
          text: "#9CA986", // Header and Footer Text
        },
        content: {
          DEFAULT: "#C9DABF", // Main Page Background
          text: "#808D7C", // Main Content Text
        },
      },
      fontFamily: {
        sans: ["Exo 2", "sans-serif"],
        serif: ["Gowun Batang", "sans-serif"],
      },
    },
  },
  plugins: [],
};
