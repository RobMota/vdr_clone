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
        },

        slideUp: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },

        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: 0,
          }
        }

      },

      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
        slide: 'slide 2s ease-in-out',
        shake: 'shake 2s ease-in-out',
        slideUp: "slideUp .5s forwards",
        shake2: 'shake 2s linear infinite',
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
    },
  },

  plugins: [],
}
