import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#072B61",
        "off-white": "#FFFDEB",
        primaryWhite: "#f6f6f6",

        // lightBlue: "#3da5d9",
        lightBlue: "#58B8E7",
      },
    },
  },
  plugins: [],
};
export default config;
