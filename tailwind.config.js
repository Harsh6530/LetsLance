/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#143c5c",
        secondary: "#3e8fad",
        background: "#a4cfcb",
        foreground: "#8e9fb6",
        front: "#143c5c",
        back: "#ffffff",
      },
      borderRadius: {
        inherit: "inherit",
      },
      fontFamily: {
        rosaria: '"Rosaria", sans-serif',
        tienne: '"Tienne", Georgia, sans-serif',
        infant: '"Ysabeau Infant", sans-serif',
      },
      transitionDuration: {
        inherit: "inherit",
      },
      zIndex: {
        1: 1,
      },
      content: {
        visible: '" "',
      },
    },
  },
  plugins: [],
};
