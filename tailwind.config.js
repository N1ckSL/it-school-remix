/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      base: "10px",
      title: "3rem",
      subtitle: "3.6rem",
    },
    extend: {
      colors: {
        primary: "rgb(25, 30, 48)",
        "link-bg": "rgba(252, 250, 247, 0.1)",
      },
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
  plugins: [],
};
