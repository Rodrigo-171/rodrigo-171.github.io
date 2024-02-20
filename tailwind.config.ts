import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": {transform : "translateY(80px)", opacity:"0"},
          "50%": {transform : "translateY(40px)", opacity:"0.5"},
          "100%":  {transform : "translateY(0px)", opacity:"1"}
        },
      },
      animation: {
        "slide-up": "slideUp 0.5s linear",
      },
    },
  },
  plugins: [],
};
export default config;
