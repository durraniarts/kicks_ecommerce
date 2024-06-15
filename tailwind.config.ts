import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "390px",
      },
      colors: {
        "kick-black": "#232321",
        "kick-blue": "#4A69E2",
        "kick-yellow": "#FFA52F",
        "kick-white": "#FAFAFA",
        "kick-gray": "#E7E7E3",
        "kick-gray_main": "#70706E",
      },
    },
  },
  plugins: [],
};
export default config;
