/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

    },
    
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#343234",
          secondary: "#6C9A8B",
          accent: "#D57A66",
          neutral: "#E9E3E6",
          "base-100": "#494649",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
