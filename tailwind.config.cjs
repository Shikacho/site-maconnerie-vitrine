/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#C2A968",
          dark: "#2B2B2B",
          light: "#eeeeedff",
          hover: "#AF9457",
        },
        ink: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
