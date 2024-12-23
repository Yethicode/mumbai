/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        paragraph: ["var(--paragraph-font)", "sans-serif"],
        header:["var(--header-font)"]
      },
      
    },
  },
  plugins: [],
};
