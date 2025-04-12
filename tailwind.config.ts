import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "15": "repeat(15, minmax(0, 1fr))",
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        "gradient-radial":
          " radial-gradient(circle at center, rgba(165, 42, 42, 0.8) 0, rgba(255,191,0, 0) 70%);",
        "gradient-radial2":
          " radial-gradient(circle at center, rgba(195,88,23, 0.8) 0, rgba(255,191,0, 0) 75%);",
        "gradient-radial3":
          " radial-gradient(circle at center, rgba(139,0,139, 0.8) 0, rgba(255,191,0, 0) 75%);",

        "hero-image":
          "url('/C7A59599-DBC3-4141-8D91-6BB39ACD286F_1_201_a.jpeg')",
        "noise-bg": "url('/noise.svg')",
      },
      gridAutoColumns: {
        "5fr": "repeat(auto-fit, minmax(150px, 1fr))",
      },
      fontSize: {
        pFS: "1.125em",
        h3Fs: "1.41em",
      },
      fontFamily: {
        cursive: ["Sacramento", "cursive"],
        serif: ["Cinzel Decorative", "serif"],
        Holiday_Sunday: ["Holiday Sunday", "sans-serif"],
        Bruno_Ace: ["Bruno Ace", "sans-serif"],
        Pumpkin: ["Pumpkin Pie Lattes", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#1e293b",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        black: "#000000",
        brown: "#2f1b12",
        lemon: "#03730B",
        offWhite: "#D9D9D9",
        raven: "#050301",
      },
      transitionProperty: {
        staggeredReveal: "opacity",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".h-screen": {
          height: ["100dvh", "100vh"],
        },
        ".h-seventy": {
          height: ["70dvh", "70vh"],
        },
        ".h-eighty": {
          height: ["80dvh", "80vh"],
        },
        ".h-eightyFive": {
          height: ["85dvh", "85vh"],
        },
      });
    }),
  ],
};
export default config;
