/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        "Robot-mono": ["Roboto Mono", "monospace"],
        Electro: ["Electrolize", "sans-serif"],
      },
    },
  },
  plugins: [],
};
