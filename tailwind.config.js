/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#2B0B45',
        'brand-red': '#FF2E2E',
        'brand-cyan': '#00E5FF',
        'dark-bg': '#0A0014',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        'border-pulse': {
          '0%, 100%': { 'border-color': 'rgba(0, 229, 255, 0.4)' },
          '50%': { 'border-color': 'rgba(0, 229, 255, 0.9)' },
        },
        'button-glow': {
          '0%, 100%': { 'box-shadow': '0 0 10px #00E5FF, 0 0 20px #2B0B45' },
          '50%': { 'box-shadow': '0 0 20px #00E5FF, 0 0 30px #2B0B45' },
        }
      },
      animation: {
        glow: 'glow 4s ease-in-out infinite',
        'border-pulse': 'border-pulse 3s ease-in-out infinite',
        'button-glow': 'button-glow 3s ease-in-out infinite',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00E5FF, 0 0 10px #00E5FF, 0 0 20px #00E5FF',
        'neon-red': '0 0 5px #FF2E2E, 0 0 10px #FF2E2E, 0 0 20px #FF2E2E',
      },
    },
  },
  plugins: [],
}
