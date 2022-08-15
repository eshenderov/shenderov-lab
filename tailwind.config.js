const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./components/**/*.tsx", "./pages/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      "logo": "#e19696",
      "logo-invert": "#1e6969",
      "green-apple": "#99d478",
      sky: "#b3e3fe",
      dragonfruit: "#dd5e89",
      peach: "#f7bb97",
      raisin: "#202030",
      white: "#ffffff",
      transparent: "transparent",
    },
  },
  plugins: [],
};
