import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#ebf5fe",
          100: "#c1dffc",
          200: "#a3d0fa",
          300: "#7abbf8",
          400: "#60adf6",
          500: "#3899f4",
          600: "#338bde",
          700: "#286dad",
          800: "#1f5486",
          900: "#184066",
        },
        secondary: {
          50: "#ededfc",
          100: "#c8c6f4",
          200: "#aeaaef",
          300: "#8883e8",
          400: "#716be3",
          500: "#4e46dc",
          600: "#4740c8",
          700: "#37329c",
          800: "#2b2779",
          900: "#211d5c",
        },
        neutral: {
          50: "#f0f1f3",
          100: "#d0d3d9",
          200: "#b9bdc7",
          300: "#989fad",
          400: "#858d9d",
          500: "#667085",
          600: "#5d6679",
          700: "#48505e",
          800: "#383e49",
          900: "#2b2f38",
        },
  
        success: {
          50: "#e7f8f0",
          100: "#b6e9d1",
          200: "#92deba",
          300: "#60cf9b",
          400: "#41c588",
          500: "#12b76a",
          600: "#10a760",
          700: "#0d824b",
          800: "#0a653a",
          900: "#084d2d",
        },
        warning: {
          50: "#fef5e7",
          100: "#fce1b3",
          200: "#fad28f",
          300: "#f8be5c",
          400: "#f7b13c",
          500: "#f59e0b",
          600: "#df900a",
          700: "#ae7008",
          800: "#875706",
          900: "#674205",
        },
        danger: {
          50: "#fdecec",
          100: "#fac5c5",
          200: "#f8a9a9",
          300: "#f48282",
          400: "#f26969",
          500: "#ef4444",
          600: "#d93e3e",
          700: "#aa3030",
          800: "#832525",
          900: "#641d1d",
        },
        light: {
          50: "#F9FAFB",
        },
        text: {
          primary: "#333333",
          secondary: "#48505e",
          light: "#989fad",
          label: "#333333",
          icon: "#858D9D",
        },
      },
    },
    
  },
  plugins: [],
};
export default config;
