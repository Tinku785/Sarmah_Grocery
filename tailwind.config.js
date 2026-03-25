/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSlate: '#0f172a', /* Deep Slate/Navy background */
        navy: '#1e293b',    /* Secondary dark */
        leafGreen: '#22c55e', /* Fresh Leaf Green accent */
        mangoOrange: '#f97316', /* Mango Orange accent */
        glassWhite: 'rgba(255, 255, 255, 0.05)', /* Frosted glass */
        glassBorder: 'rgba(255, 255, 255, 0.1)',
        glassGlow: '#39ff14', /* Neon green glow */
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'], /* Bold, modern heavy-weight grotesque */
      },
      animation: {
        'ken-burns': 'kenBurns 20s ease-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
