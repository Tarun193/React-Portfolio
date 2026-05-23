/** @type {import('tailwindcss').Config} */
const plugins = require("tailwindcss/plugin");
export default {
  content: ["./src/**/*.{html,js,jsx}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        "press-start": ['"Press Start 2P"', "cursive"],
        "Robot-mono": ["Roboto Mono", "monospace"],
        Electro: ["Electrolize", "sans-serif"],
      },
      screens: {
        xs: "440px",
      },
    },
  },
  plugins: [
    plugins(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
