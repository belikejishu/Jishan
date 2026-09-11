/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./standalone.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Times New Roman"', 'Times', 'Georgia', 'serif'],
        serif: ['"Times New Roman"', 'Times', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0284c7',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    },
  },
  plugins: [],
}
