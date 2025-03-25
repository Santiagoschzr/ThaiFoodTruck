import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
        "ibm-plex-mono": ["IBM Plex Mono", "monospace"],
      },
      animation: {
        "brutalist-pulse":
          "brutalist-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "brutalist-pulse": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-4px, -4px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
