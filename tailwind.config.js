/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: .2
          }
        },

        slide: {
          '0%': { opacity: 0 },
          "100%": { opacity: 1, x: 0 }
        },

        shake: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(3deg)' },
          '20%': { transform: 'rotate(-3deg)' },
          '30%': { transform: 'rotate(3deg)' },
          '40%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        }
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
        slide: 'slide 2s ease-in-out',
        shake: 'shake 2s ease-in-out'
      },
    },
  },

  plugins: [],
}
