/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        'profile':"url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww')",
      },
      colors:{
        "gold" : "#FFFF00",
        "black" : "#000000",
        "dark-100" : "#F3F4F6",
        "dark-200" : "#CBC6C6",
        "dark-300" : "#9CA3AF",
        "light-100" : "#FFDDDC",
        "light-200" : "#FFCCCB",
        "light-300" : "#FEBDBB"

      },
    },
  },
  plugins: [],
}