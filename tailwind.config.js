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
      "logo-pink": "#e19696",
      pink: "#dd5e89",
      peach: "#f7bb97",
      raisin: "#202030",
      white: "#ffffff",
      transparent: "transparent",
    },
  },
  plugins: [],
};
