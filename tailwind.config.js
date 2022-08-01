/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: "12px",
        title: "3rem",
        subtitle: "3.6rem",
      },
      colors: {
        primary: "rgb(25, 30, 48)",
        black: "#000",
        hover: "rgb(0, 135, 104)",
        semitransparent: "rgba(25, 30, 48, 0.4)",
        "link-bg": "rgba(252, 250, 247, 0.1)",
        "button-primary": "rgb(0, 135, 104)",
        "button-primary-hover": "rgba(0, 135, 104,0.8)",
        "testi-blue": "rgb(19, 123, 188)",
        secondary: "rgb(255,0,0)",
      },
      backgroundImage: {
        heroImg: "url('/images/background-big.svg')",
        courses: "url('/images/courses.svg')",
      },
      backgroundSize: {
        a100: "auto 100%",
      },
      borderColor: {
        secondary: "rgb(0, 135, 104)",
      },
      height: {
        img80: "80%",
      },
    },
  },
  plugins: [],
};
