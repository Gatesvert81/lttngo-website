/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'green': "#07953a",
        "gray": "#88888",
        "light-gray": "#b5b5b5",
        "light-white": "#f8f8f8",
        "sea-blue": "#5FC2D9"
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
    },
  },
  plugins: [],
}
