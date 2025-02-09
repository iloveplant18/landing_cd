/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./assets/js/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#27272A",
        "grey-dark": "#696969",
        "grey": "#E5E7EB",
        "light": "#FCFBFA",
        "accent": "#7E3AF2",
        "accent-dark": "#6C2BD9",
        "accent-light": "#CABFFD",
        "danger": "#E02424",
      },
      fontFamily: {
        "montserrat": "Montserrat",
      },
      fontSize: {
        "sm": "0.875rem",
        "base": "1rem",
        "md": "1.25rem",
        "lg": "1.5rem",
        "3xl": "2rem",
        "6xl": "3.75rem",
      },
    },
  },
  plugins: [],
};
