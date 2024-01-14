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
        "gradient-radial":
          "linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% );",
        "hero-image": "url('/hala-al-asadi-lqb0Mqq8RSM-unsplash.jpg')",
        "noise-bg": "url('/noise.svg')",
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
        // lemon: "#5dcb96",
        offWhite: "#D9D9D9",
      },
      transitionProperty: {
        staggeredReveal: "opacity",
      },
    },
  },
  plugins: [],
};
export default config;
