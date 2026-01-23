import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      colors: {
        darkBlue: {
          900: "#001f3d",
          800: "#003366",
          700: "#004080",
          600: "#005099",
          darker: "#002147",
        },
        gold: "#DAA520",
      },
      animation: {
        slideIn: "slide-in 2s forwards",
        slideRight: "slide-right 2s forwards",
        slideLeft: "slide-left 2s forwards",
        slideDown: "slide-down 2s forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
