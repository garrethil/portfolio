/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode support
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify files to scan for class usage
  theme: {
    extend: {
      borderWidth: {
        1: "1px", // 1px border width
      },
      colors: {
        primary: {
          DEFAULT: "#17241a", // Dark green background
          text: "#4a6550", // Light green text
        },
        content: {
          DEFAULT: "#cbdccf", // Light gray for sections like Music
          text: "#4F4F4F", // Dark gray text for readability
        },
        highlight: {
          DEFAULT: "#5364ff", // Blue for buttons, links, and accents
          hover: "#808080", // Darker gray for hover states
        },
      },
      spacing: {
        "header-height": "4rem", // Add custom height for header if needed
      },
    },
  },
  plugins: [],
};
