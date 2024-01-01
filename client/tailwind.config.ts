import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        pop: ["var(--font-pop)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#00A9FF",
        secondary: "#144B66",
        par: "#166395",
        komen: "#737373",
      },
      boxShadow: {
        card: "4px 4px 4px 0px rgba(0, 0, 0, 0.25);",
        features: "0px 15px 30px 0px rgba(0, 0, 0, 0.10);",
        sidebar: "0px 0px 2px 0px rgba(0, 0, 0, 0.10);",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
