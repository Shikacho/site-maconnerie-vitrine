/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#9B7B52", // marron principal (toit/cercle)
          dark: "#5A4B3A", // marron foncé (TALBAT)
          light: "#F4EDE3", // beige très clair (fond)
        },
      },
    },
  },
  plugins: [],
};
