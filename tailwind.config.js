module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
      },
      height: {
        "h-100": "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui"), require('tailwindcss-patterns')],
};
