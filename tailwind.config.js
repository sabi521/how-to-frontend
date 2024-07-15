/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // activates Just-in-Time mode
  prefix: "", // adds 'tw-' prefix to the classes
  content: ["./**/*.html", "./**/*.{vue,js,ts,jsx,tsx}"], // update this path if needed, include *.php
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        nexaheavy: ['"Nexa Heavy"'],
        nexabold: ['"Nexa Bold"'],
        nexaregular: ['"Nexa Regular"'],
        nexalight: ['"Nexa Light"'],
        kommissarCondensed: ['"Kommissar Condensed"'],
        ubuntuRegular: ["Ubuntu Regular"],
        ubuntuLight: ["Ubuntu Light"],
        ubuntuBold: ["Ubuntu Bold"],
        ubuntuMedium: ["Ubuntu Medium"],
      },
      boxShadow: {
        "3xl": " 0px 1px 11.3px 0px rgba(39, 49, 60, 0.12);",
        "4xl": "0px 0px 0px 3px rgba(0, 114, 235, 0.42)",
        "5xl": " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
