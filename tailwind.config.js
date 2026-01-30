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
        "preset-1": [
          "24px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
          },
        ],
        "preset-2": [
          "16px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
          },
        ],
        "preset-3": [
          "14px",
          {
            lineHeight: "150%",
            letterSpacing: "0px",
          },
        ],
      },
      boxShadow: {
        neoBrutalist: "8px 8px 0 #111111",
        neoBrutalistHover: "16px 16px 0 #111111",
      },
      borderRadius: {
        10: "10px",
        20: "20px",
      },
    },
  },
};
