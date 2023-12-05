/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "light": "#FFFBF5",
        "light-pink": "#F2BBD0",
      },
    },
  },
  plugins: [],
}