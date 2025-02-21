/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./build/*.html", "./build/js/*.js"],
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1600px",
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)", opacity: 0 },
          "80%": { transform: "scaleY(1.2)", opacity: 0 },
          "100%": { transform: "scaleY(1)", opacity: 1 },
        },
        "close-menu": {
          "0%": { transform: "scaleY(1)", opacity: 1 },
          "80%": { transform: "scaleY(1.2)", opacity: 1 },
          "100%": { transform: "scaleY(0)", opacity: 0 },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "close-menu": "close-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
