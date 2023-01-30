/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-black": "#141010",
      "pure-black": "#000",
      "primary-white": "#f8f3e6",
      "pure-white": "#ffff",
      "primary-pink": "#eeaccb",
      "darker-pink": "#e094b2",
      "primary-wine": "#954b63",
      "primary-blue": "#adc0da",
      "darker-blue": "#7083a6",
    },
    fontFamily: {
      Playfair: ["Playfair Display, serif"] /*Titulos*/,
      raleway: ["Raleway', sans-serif"] /*SubTitulos*/,
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
