/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f8f4",
          100: "#deefe5",
          200: "#b7dbc6",
          300: "#8cc6a5",
          400: "#59a97b",
          500: "#3d8f62",
          600: "#2e724c",
          700: "#255b3e",
          800: "#1f4a33",
          900: "#1a3d2b"
        }
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(15, 62, 38, 0.45)"
      }
    }
  },
  plugins: []
};
