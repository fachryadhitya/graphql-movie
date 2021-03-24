module.exports = {
  purge: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Raleway", "cursive"],
      serif: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        peach: "#ffd6ba",
        "white-primary": "#faf9f9",
        "light-green-primary": "#bee3db",
        "green-primary": "#89b0ae",
        "dark-grey-primary": "#555b6e",
      },

      width: {
        45: "48%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
