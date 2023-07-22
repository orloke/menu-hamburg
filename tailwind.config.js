/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        caneraPan: 'caneraPan 30s infinite',
      },
      keyframes: {
        caneraPan: {
          "0%": { 'background-position': "0% 0%" },
          "25%": { 'background-position': "40% 10%" },
          "50%": { 'background-position': "0% 10%" },
          "75%": { 'background-position': "10% 40%" },
          "100%": { 'background-position': "0% 0%" },
        },
      },
    },
  },
  plugins: [],
};
