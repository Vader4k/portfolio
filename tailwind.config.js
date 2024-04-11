/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': {
          DEFAULT: '#000000',
          '50': '#EDE7E0',
        },
        'text': {
          DEFAULT: '#000000',
          '50': '#1B1918',
        }
      }
    },
  },
  plugins: [],
}
