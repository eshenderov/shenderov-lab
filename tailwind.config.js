const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./components/**/*.tsx", "./pages/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      logo: "#e19696",
      "logo-invert": "#5a9932",
      "green-apple": "#9dd47a",
      sky: "#b6e5ff",
      dragonfruit: "#dd5e89",
      peach: "#f7bb97",
      raisin: "#202030",
      "raisin-bright": "#28283c",
      white: "#e9e9ea",
      transparent: "transparent",
    },
  },
  plugins: [],
};
