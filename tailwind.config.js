/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "sm-1": { max: "639px" },
        "Lg-1": { min: "1024px", max: "1251px" },
        "Lg-2": "1251px",
        "Lg-3": "1382px",
      },

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
