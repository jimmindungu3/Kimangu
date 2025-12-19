/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60a5fa",
          DEFAULT: "#3b82f6",
        },

        secondary: {
          light: "#facc15",
          DEFAULT: "#eab308",
        },

        tertiary: {
          light: "#4ade80",
          DEFAULT: "#22c55e",
        },
      },
    },
  },
  plugins: [],
};
