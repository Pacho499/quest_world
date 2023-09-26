import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AA0C10",
        secondary: "#DAA520",
        special: "#4B0082",
        background: "#E7E7DB",
        backgroundSecondary: "#C5D9E8",
        text: "#1A1A1A",
        sendMessage: "#2ACC6B",
        error: "#FE0000",
      },
      fontSize: {
        Dh1: ["3.125rem", "4.375rem"],
        Dh2: ["2.188rem", "3.125rem"],
        Dh3: ["1.25rem", "2.125rem"],
        Dp: ["1rem", "1.625rem"],
        Mh1: ["2.5rem", "3.125rem"],
        Mh2: ["1.563rem", "2.5rem"],
        Mh3: ["1rem", "1.625rem"],
        Mp: ["1rem", "1.625rem"],
      },
    },
  },
  plugins: [],
} satisfies Config;
