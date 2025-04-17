/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        industry:['Industry', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],  // Add Open Sans font

      },
    },
  },
  plugins: [],
}