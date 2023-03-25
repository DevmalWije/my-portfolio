/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 15s ease-in-out infinite",
      
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.2)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
  
      },
      boxShadow: {
        doublexl: "0 10px 50px -12px rgba(0, 235, 179, 194)",
      },
      colors: {
        pastel_purple: "#9c9dd4",
        pastel_green: "#bedfd4",
        pastel_pink: "#edb5c0",
        dark_mode: "#071e26",
        lime: "#C5ff00",
      },
      backgroundImage: {
        backdrop_light: "../public/backdrop-light.png",
        backdrop_dark: "../public/backdrop-dark.png",
      },
      fontFamily: {
        oswald: "Oswald",
        Montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
