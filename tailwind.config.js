/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
      },
      colors: {
        // white:{
        //   100:"#FFFFFF"
        // },
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
//gallery
      animation: {
        runner: "runner 10s linear infinite",
        slower: "runner 20s linear infinite",
      },
      keyframes: {
        runner: {
          "0%": { transform: "translateX(23%)" },
          "100%": { transform: "translateX(-10.4%)" },
        },
      },

    },
  },
  plugins: [],
}