/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#28292b",
        steelblue: "#1275b1",
        white1: "#fefefe",
        primary: "#8027c4",
        darkorchid: "#a64deb",
        "gray-600": "#475467",
        "gray-300": "#d0d5dd",
        "gray-500": "#667085",
        "gray-700": "#344154",
        "gray-50": "#f9fafb",
        "gray-900": "#101828",
        "brand-700": "#6941c6",
        gray1: "rgba(0, 0, 0, 0.5)",
        black: "#030303",
        primary1: "#bbaebb",
        primary2: "#d69efd",
        mediumpurple: "#a36bc9",
      },
      spacing: {},
      fontFamily: {
        "paragraphs-light": "'Inria Sans'",
        "text-sm-regular": "Inter",
      },
      borderRadius: {
        "37xl": "56px",
        "21xl": "40px",
        "3xs": "10px",
        "22xl": "41px",
        sm: "14px",
        mini: "15px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xl: "20px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      xs: "12px",
      "3xs": "10px",
      "61xl": "80px",
      "5xl": "24px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
