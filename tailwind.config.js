/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mario-red': '#E60012',
        'mario-blue': '#0066CC',
        'mario-yellow': '#FBD000',
      },
      fontFamily: {
        'super-mario': ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
