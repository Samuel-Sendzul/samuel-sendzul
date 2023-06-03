/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
    borderRadius: {
      xs: "0.6875rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      full: "9999px",
    },
    colors: {
      "black-rgba": "rgba(0,0,0,0.9)",
      neutral: {
        9: "#17121f",
        2: "#463a58",
        1: "#787878",
        DEFAULT: "#8d8698",
        "-1": "#968fa0",
        "-2": "#a5a0ae",
        "-3": "#b4afbb",
        "-4": "#d1cfd6",
        "-5": "#e9e7eb",
        "-6": "#edecf0",
        "-7": "#f3f3f4",
        "-8": "#fbfafb",
        "-9": "#ffffff",
      },
      purple: {
        9: "#2d1040",
        2: "#5f1ca1",
        1: "#7229cf",
        DEFAULT: "#911fff",
        "-1": "#ae59ff",
        "-2": "#b66bff",
        "-3": "#c88fff",
        "-4": "#d3a5ff",
        "-5": "#e4c7ff",
        "-6": "#f4e9ff",
        "-7": "#faf4ff",
        "-8": "#fdfbff",
      },
      transparent: "transparent",
    },
    fontSize: {
      hero: [
        "75px",
        {
          letterSpacing: "-0.03em",
          lineHeight: "1.2",
        },
      ],
      "section-header": [
        "56px",
        {
          letterSpacing: "-0.03em",
          lineHeight: "1.2",
        },
      ],
      "4xl": [
        "42px",
        {
          letterSpacing: "-0.03em",
          lineHeight: "1.2",
        },
      ],
      "3xl": [
        "32px",
        {
          letterSpacing: "-0.03em",
          lineHeight: "1.2",
        },
      ],
      "2xl": [
        "24px",
        {
          letterSpacing: "-0.03em",

          lineHeight: "1.2",
        },
      ],
      xl: [
        "21px",
        {
          letterSpacing: "-0.03em",
          lineHeight: "1.2",
        },
      ],
      lg: [
        "17px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "1.2",
        },
      ],
      md: [
        "16px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "1.2",
        },
      ],
      sm: [
        "14px",
        {
          letterSpacing: "-0.01em",
          lineHeight: "1.2",
        },
      ],
      xs: [
        "13px",
        {
          letterSpacing: "0",
          lineHeight: "1.2",
        },
      ],
      "2xs": [
        "12px",
        {
          letterSpacing: "0",
          lineHeight: "1.2",
        },
      ],
      "3xs": [
        "10px",
        {
          letterSpacing: "0",
          lineHeight: "1.2",
        },
      ],
      "4xs": [
        "8px",
        {
          letterSpacing: "0",
          lineHeight: "1.2",
        },
      ],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semi: 600,
    },
  },
};
