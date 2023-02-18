/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF385C",
        "dark-grey": "#222",
      },
      screens: {
        sm: "550px",
        md: "744px",
        lg: "950px",
        xl: "1128px",
        "2xl": "1440px",
        "3xl": "1640px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
