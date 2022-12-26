/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: "lightgray",
        thirdy: {
          100: "lightgray",
          200: "blue",
        },
      },
    },
  },
  plugins: [],
};
