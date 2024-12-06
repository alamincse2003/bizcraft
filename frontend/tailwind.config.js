/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
        accent: '#10B981',
        warning: '#EF4444',
        lightGray: '#F9FAFB',
        darkGray: '#4B5563',
        gray: '#9CA3AF',
        background: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

