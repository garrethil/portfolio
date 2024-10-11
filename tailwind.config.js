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
          DEFAULT: "#1C1C1C", // Dark Header and Footer Background for strong contrast
          text: "#F5F5F5", // Light Header and Footer Text for maximum clarity
        },
        content: {
          DEFAULT: "#F0F0F0", // Light Gray Main Page Background for minimal color distraction
          text: "#333333", // Dark Gray Main Content Text for excellent readability
        },
        highlight: {
          DEFAULT: "#FFD700", // Gold color for highlighted elements
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
