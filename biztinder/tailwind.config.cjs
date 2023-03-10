/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#2b2e30",
        "primary-coffe": "#b77a37",
        "yellow-dark": "#c78a35",
        "yellow-mid": "#d59834",
        "primary-yellow": "#e5a832",
        "primary-white": "#e1e1e1",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
