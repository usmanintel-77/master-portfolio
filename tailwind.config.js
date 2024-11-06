/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a1a2e",
        "highlight-red": "rgba(255, 0, 0, 0.2)", // Soft red for the highlight
      },
    },
  },
  plugins: [],
};
