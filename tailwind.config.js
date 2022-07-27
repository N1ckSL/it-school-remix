/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "10px",
        title: "3rem",
        subtitle: "3.6rem",
      },
      colors: {
        primary: "rgb(25, 30, 48)",
        semitransparent: "rgba(25, 30, 48, 0.4)",
        "link-bg": "rgba(252, 250, 247, 0.1)",
        "button-primary": "rgb(0, 135, 104)",
      },

      backgroundImage: {
        heroImg: "url('/images/background-big.svg')",
      },
      backgroundSize: {
        a100: "auto 100%",
      },
      height: {
        img80: "80%",
      },
    },
  },
  plugins: [],
};
