module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
    extend: {
      colors: {
        "primary-color": "#5D5BF4",
        "text-color": "#1B1B1B",
        "disabled-text": "#ACACAF",
      },
    },
    container: {
      center: true,
      // padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1440px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
