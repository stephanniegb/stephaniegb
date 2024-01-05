import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('/hala-al-asadi-lqb0Mqq8RSM-unsplash.jpg')",
      },
      gridAutoColumns: {
        "5fr": "repeat(auto-fit, minmax(150px, 1fr))",
      },
      fontSize: {
        pFS: "1.125em",
      },
      fontFamily: {
        cursive: ["Sacramento", "cursive"],
        serif: ["Cinzel Decorative", "serif"],
        Holiday_Sunday: ["Holiday Sunday", "sans-serif"],
        Bruno_Ace: ["Bruno Ace", "sans-serif"],
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
        brown: "#463f3a",
        lemon: "#5dcb96",
      },
      transitionProperty: {
        staggeredReveal: "opacity",
      },
    },
  },
  plugins: [],
};
export default config;
