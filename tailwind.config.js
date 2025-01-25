/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titles: ["Montserrat Alternates", "serif"],
        body: ["Montserrat"],
      },
      colors: {
        primary: "#279761",
        chamaBlack: "#0E0E0E",
        chamaWhite: "#F0F9F7",
        chamaYellow: "#F2E7B5",
        chamaGreen: "#83CCA8",
        chamaCream: "#FBFBFB",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [],
};
