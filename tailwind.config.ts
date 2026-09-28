import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#000814",
        deep: "#06101f",
        panel: "#0b1730",
        mist: "#f4f6f9",
        ink: "#0b1220",
        violet: "#6d4aff",
        bloom: "#8b6cff",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(109,74,255,.28)",
        card: "0 18px 50px rgba(0,8,20,.18)",
      },
    },
  },
  plugins: [],
};

export default config;
