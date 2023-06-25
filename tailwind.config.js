/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#495e57',
        primary: "#f4ce14"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}

