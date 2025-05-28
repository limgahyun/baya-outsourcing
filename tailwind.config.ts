import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      red: {
        100: "#FFF1F1",
        200: "#FFD4D4",
        300: "#FFB5B5",
        400: "#FF8F8F",
        500: "#FF6B6B",
        600: "#F04747",
        700: "#D42C2C",
        800: "#B01919",
        900: "#8C0D0D",
      },
      yellow: {
        100: "#FFF9E6",
        200: "#FFEEB3",
        300: "#FFE380",
        400: "#FFD84D",
        500: "#FFCD1A",
        600: "#E6B400",
        700: "#B38C00",
        800: "#806400",
        900: "#4D3C00",
      },
      green: {
        100: "#E6FFF1",
        200: "#B3FFD9",
        300: "#80FFC2",
        400: "#4DFFAA",
        500: "#1AFF93",
        600: "#00E67A",
        700: "#00B35F",
        800: "#008044",
        900: "#004D29",
      },
      blue: {
        100: "#EBF3FF",
        200: "#C7DDFF",
        300: "#94BFFF",
        400: "#619FFF",
        500: "#3E8FFF",
        600: "#2B6FDB",
        700: "#1B51B7",
        800: "#0F3693",
        900: "#081F70",
        1000: "#140547",
      },
      gray: {
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4D4D4D",
        800: "#333333",
        900: "#1A1A1A",
      },
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      fontFamily: {
        gmarket: ["var(--font-gmarket-sans)"],
        pretendard: ["var(--font-pretendard)"],
      },
      keyframes: {
        "scroll-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "scroll-up": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "scroll-down": "scroll-down 20s linear infinite",
        "scroll-up-slow": "scroll-up 25s linear infinite",
        "scroll-down-fast": "scroll-down 15s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
