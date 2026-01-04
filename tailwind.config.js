/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Sustituye estos valores por los que más te gusten (ej. un azul eléctrico o un verde neón)
        brand: {
          light: '#00d2ff', // Un color vibrante para acentos
          DEFAULT: '#0072ff',
          dark: '#003366',
        },
        surface: {
          100: '#ffffff',
          200: '#f8fafc',
          900: '#0f172a', // Para el modo oscuro
        }
      },
      // Añadimos una fuente personalizada si quieres
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'sans-serif'], // Para titulares
      },
    },
  },
  plugins: [],
}