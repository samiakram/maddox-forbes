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
        offWhite: "#FFFDEB",
        primaryWhite: "#f6f6f6",
        lightBlue: "#677b96",
        grey: "#aebac8",
      },
    },
  },
  plugins: [],
};
export default config;
