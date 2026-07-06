import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        hub: {
          background: "#070706",
          elevated: "#121110",
          card: "#17140f",
          border: "#2a2620",
          gold: "#d79b1f",
          goldLight: "#eec565",
          goldDim: "#8a641b",
          text: "#f3efe6",
          muted: "#a89f8f",
          faint: "#6e6555"
        }
      },
      fontFamily: {
        sans: ["var(--font-instrument)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-bitcount)", "var(--font-poppins)", "sans-serif"]
      },
      maxWidth: {
        hub: "1180px"
      },
      boxShadow: {
        gold: "0 18px 60px rgba(215, 155, 31, 0.16)"
      },
      backgroundImage: {
        "hub-noise":
          "radial-gradient(circle at top left, rgba(238, 197, 101, 0.12), transparent 32rem), radial-gradient(circle at bottom right, rgba(138, 100, 27, 0.1), transparent 28rem)"
      }
    }
  },
  plugins: []
};

export default config;
