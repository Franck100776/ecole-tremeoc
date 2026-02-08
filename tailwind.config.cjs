/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        surface: '#F3F4F6',
        midnight: '#0F172A',
        slate: '#334155',
        clay: '#C2410C',
        sand: '#E7E5E4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': 'clamp(3rem, 6vw + 1rem, 6rem)',
        'h1': 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
        'h2': 'clamp(2rem, 4vw + 1rem, 3.5rem)',
        'h3': 'clamp(1.5rem, 3vw + 0.5rem, 2.25rem)',
        'body-lg': 'clamp(1.125rem, 1vw + 0.5rem, 1.25rem)',
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}