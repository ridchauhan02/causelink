module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: {
          200: "#caadd6",
          300: "#d85bbd",
          "200_87": "#caadd687",
          "200_7f": "#caadd67f",
        },
        white: {
          A700_3f: "#ffffff3f",
          A700_99: "#ffffff99",
          A700_87: "#ffffff87",
          A700: "#ffffff",
        },
        blue_gray: { 100: "#d9d9d9", "100_01": "#cccccc" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_87": "#05020787",
          "900_01": "#050207",
          "900_87_01": "#00000087",
          "900_99": "#00000099",
          "900_71": "#05020771",
        },
        deep_purple: { 300: "#aa7cce", "300_3a": "#aa7cce3a" },
        gray: {
          300: "#e9dede",
          500: "#9a9797",
          600: "#765f93",
          700: "#664d74",
          900: "#291539",
          "600_87": "#7a608887",
          "600_01": "#7a6088",
          "900_01": "#1e1e1e",
        },
      },
      boxShadow: {
        bs2: "15px 15px  10px 0px #ffffff3f",
        bs1: "0px 0px  12px 0px #0000003f",
        bs: "0px 4px  4px 0px #0000003f",
      },
      fontFamily: { judson: "Judson", kadwa: "Kadwa", inter: "Inter" },
      textShadow: {
        ts: "3px 3px  4px #caadd6",
        ts1: "5px 5px  10px #ffffff3f",
        ts2: "0px 4px  4px #0000003f",
      },
      backgroundImage: { gradient: "linear-gradient(179deg ,#ffffff,#d85bbd)" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
