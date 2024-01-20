import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      height: {
        screen: "100vh",
        "100dvh": "100vh",
        seventyVH: "70vh",
        "70dvh": "70vh",
        fiftyVH: "50vh",
        "50dvh": "50vh",
        eightyVH: "80vh",
        "80dvh": "80vh",
      },
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
  plugins: [],
};
export default config;
