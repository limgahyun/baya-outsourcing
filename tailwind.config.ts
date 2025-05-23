import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#140547",
        secondary: "#3e8fff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gmarket: ["var(--font-gmarket-sans)"],
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};

export default config;
