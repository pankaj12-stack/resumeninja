/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx,mdx}"],
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.5rem" }],
    base: ["1rem", { lineHeight: "1.75rem" }],
    lg: ["1.125rem", { lineHeight: "2rem" }],
    xl: ["1.25rem", { lineHeight: "2rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["2rem", { lineHeight: "2.5rem" }],
    "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
    "5xl": ["3rem", { lineHeight: "3.5rem" }],
    "6xl": ["3.75rem", { lineHeight: "1" }],
    "7xl": ["4.5rem", { lineHeight: "1.1" }],
    "8xl": ["6rem", { lineHeight: "1" }],
    "9xl": ["8rem", { lineHeight: "1" }],
  },
  theme: {
    extend: {
      backgroundImage: {
        dot: "url('/assets/dots.svg')",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/aspect-ratio"),
  ],
};
