import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundNav: "var(--backgroundNav)",
        backgroundDark: "var(--backgroundDark)",
        backgroundNavDark: "var(--backgroundNavDark)"
      },
    },
  },
  plugins: [],
};
export default config;
