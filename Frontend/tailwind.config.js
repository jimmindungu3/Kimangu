/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60a5fa", // primary-one
          DEFAULT: "#3b82f6", // primary-two
        },

        secondary: {
          light: "#facc15", // secondary-one
          DEFAULT: "#eab308", // secondary-two
        },

        tertiary: {
          light: "#4ade80", // tertiary-one
          DEFAULT: "#22c55e", // tertiary-two
        },
      },
    },
  },
  plugins: [],
};
