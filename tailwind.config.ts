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
        "slide-down-fade":
          "slide-down-fade 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
        "slide-down-fade-2":
          "slide-down-fade 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both",
        "slide-down-fade-3":
          "slide-down-fade 1.8s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both",
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%",
        "5": "5 5 0%",
      },
      boxShadow: {
        "sm-white": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        white: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "md-white":
          "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.1)",
        "lg-white":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -4px rgba(255, 255, 255, 0.1)",
        "xl-white":
          "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 8px 10px -6px rgba(255, 255, 255, 0.1)",
        "2xl-white": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
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
