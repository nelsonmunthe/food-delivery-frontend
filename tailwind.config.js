/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "backgroundOrange": "#FC8A06",
        "backgroundGreen": "#028643",
        "backgroundGray": "#E2E2E2",
        "backgroundBlack": "#03081F"
      }
    },
  },
  plugins: [],
}

