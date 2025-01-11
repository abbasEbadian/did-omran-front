import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    opacity: true, 
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "rgb(var(--blue) / <alpha-value>)",
        blue900: "rgb(var(--blue900) / <alpha-value>)",
        blue800: "rgb(var(--blue800) / <alpha-value>)",
        blue700: "rgb(var(--blue700) / <alpha-value>)",
        blue600: "rgb(var(--blue600) / <alpha-value>)",
        blue500: "rgb(var(--blue500) / <alpha-value>)",
        purple: "rgb(var(--purple) / <alpha-value>)",
        green100: "rgb(var(--green100) / <alpha-value>)",
        purple100: "rgb(var(--purple100) / <alpha-value>)",
        dark: "rgb(var(--dark) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        secondary900: "rgb(var(--secondary900) / <alpha-value>)",
        secondary800: "rgb(var(--secondary800) / <alpha-value>)",
        secondary700: "rgb(var(--secondary700) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        did: "rgb(var(--did) / <alpha-value>)",
        yellow: "rgb(var(--yellow) / <alpha-value>)",
        white100: "rgb(var(--white100) / <alpha-value>)",

      },
      boxShadow: {
        'custom-drop-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
   
        'custom-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
    },
  },
  plugins: [],
} satisfies Config;
