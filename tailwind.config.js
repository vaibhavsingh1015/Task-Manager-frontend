/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-page': '#FAFAF9',
        'card': '#FFFFFF',
        'primary': '#FFD54A',
        'primary-hover': '#FFCC21',
        'text': '#111827',
        'text-muted': '#6B7280',
        'success': '#16A34A',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

