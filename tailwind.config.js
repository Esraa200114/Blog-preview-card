/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        yellow: "#F4D04E",
        gray: {
          500: "#6B6B6B",
          950: "#111111",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        body: ["Figtree", "sans-serif"],
      },
      fontWeight: {
        medium: 500,
        extrabold: 800,
      },
      fontSize: {
        "preset-0": [
          "1.5rem" /* 24 px */,
          {
            lineHeight: "150%",
            letterSpacing: "0",
          },
        ],
        "preset-1": [
          "1.25rem" /* 20 px */,
          {
            lineHeight: "150%",
            letterSpacing: "0",
          },
        ],
        "preset-2": [
          "1rem" /* 16 px */,
          {
            lineHeight: "150%",
            letterSpacing: "0",
          },
        ],
        "preset-3": [
          "0.875rem" /* 14 px */,
          {
            lineHeight: "150%",
            letterSpacing: "0",
          },
        ],
        "preset-4": [
          "0.75rem" /* 12 px */,
          {
            lineHeight: "150%",
            letterSpacing: "0",
          },
        ],
      },
      boxShadow: {
        neoBrutalist: "0.5rem 0.5rem 0 #111111",
        neoBrutalistHover: "1rem 1rem 0 #111111",
      },
      borderRadius: {
        10: "0.625rem" /* 10 px */,
        20: "1.25rem" /* 20 px */,
      },
    },
  },
};
