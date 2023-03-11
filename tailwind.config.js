/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF385C",
        "dark-grey": "#222",
        "light-grey": "#ddd",
      },
      screens: {
        sm: "550px",
        md: "744px",
        lg: "950px",
        xl: "1128px",
        "2xl": "1440px",
        "3xl": "1640px",
        "4xl": "1880px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      transitionDuration: {
        400: "400ms",
      },
      boxShadow: {
        hover: "0px 2px 4px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};
