/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#af25f4",
        "background-light": "#f7f5f8",
        "background-dark": "#1c1022",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [],
}