/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: "class",
  theme: {
    extend: {
      backgroundImage:{
        'profile':"url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww')",
      },
      colors:{
        "gold" : "#FFFF00",
        "black" : "#000000",
        "grey-100" : "#e4e4e4",
        "grey-200" : "#616161",
        "grey-300" : "#8A8A8A",
        "pink-100" : "#F8AC9C",
        "pink-200" : "#F4988D",
        "pink-300" : "#EE8081"

      },
    },
  },
  plugins: [],
}