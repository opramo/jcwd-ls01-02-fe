/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#009B90",
        "primary-dark": "#008076",
        secondary: "#213360",
        neutral: "#222222",
        "neutral-gray": "#CCCCCC",
        facebook: "#527BCB",
      },
    },
  },
  plugins: [],
};
