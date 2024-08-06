/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2sm": { max: "500px" },
    },
    extend: {
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        fadeInOut: "fadeInOut 4s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};
