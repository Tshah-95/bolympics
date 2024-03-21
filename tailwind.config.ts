import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["var(--font-sf)", "system-ui", "sans-serif"],
      default: ["var(--font-inter)", "system-ui", "sans-serif"],
    },
    screens: {
      "2xs": "380px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        "slide-down-fade": "slide-down-fade 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade-2":
          "slide-down-fade 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both",
        "slide-down-fade-3":
          "slide-down-fade 1.8s cubic-bezier(0.16, 1, 0.3, 1) 1s both",
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "slide-down-fade": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-less": {
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
