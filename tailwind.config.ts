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
        primaryWhite: "#f6f6f6",
        offWhite: "#FFFDEB",
        navy: "#042c64",
        lightBlue: "#677b96",
        grey: "#aebac8",
      },
    },
  },
  plugins: [],
};
export default config;
