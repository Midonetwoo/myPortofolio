/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1021",
        mist: "#f5f7fb",
        accent: "#3b82f6",
        ember: "#f97316"
      },
      fontFamily: {
        display: ["'DM Sans'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
