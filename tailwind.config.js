/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glowave: {
          'primary-blue': '#0062E0',
          'deep-blue': '#003E99',
          'soft-blue': '#C2DDFF',
          'light-gray': '#F9FAFB',
          'dark-bg': '#05070A',
        },
        dark: {
          950: '#000103',
          900: '#05070A',
          800: '#0C0F14',
          700: '#151921',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'], // Simplified to Inter as per plan, could switch to Satoshi if user asks later
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'glow-gradient': 'linear-gradient(135deg, #0062E0 0%, #003E99 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'premium-glow': '0 0 20px rgba(0, 98, 224, 0.3)',
        'premium-glow-hover': '0 0 30px rgba(0, 98, 224, 0.5)',
      }
    },
  },
  plugins: [],
}
