/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        
        brand: {
          light: '#00d2ff',
          DEFAULT: '#0072ff',
          dark: '#003366',
        },
        surface: {
          100: '#ffffff',
          200: '#f8fafc',
          900: '#0f172a', // Para el modo oscuro
        }
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'sans-serif'], // Para titulares
      },
    },
  },
  plugins: [],
}