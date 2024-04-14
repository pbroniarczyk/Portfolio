import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background": "url(/bg.jpg)",
      },
      backgroundPosition: {
        "position-1": "-450px -260px",
        "position-2": "10px 20px",
      },
    },
  },
  plugins: [],
};
export default config;
