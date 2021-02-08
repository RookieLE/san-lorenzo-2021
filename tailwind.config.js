module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home-header': "url('assets/home/mountain.png')",
        footer: "url('assets/footer.png')",
        agriturismo: "url('assets/agriturismo.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
