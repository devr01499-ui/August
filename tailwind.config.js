/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Deep Navy
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#0A2540', // Primary Deep Navy
        },
        // Electric Blue Accent
        electric: {
          50: '#E6F3FF',
          100: '#B3D9FF',
          200: '#80BFFF',
          300: '#4DA6FF',
          400: '#1A8CFF',
          500: '#0061FF', // Electric Blue
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        // Coral Red Accent
        coral: {
          50: '#FFF0F0',
          100: '#FFD6D6',
          200: '#FFB3B3',
          300: '#FF8080',
          400: '#FF4D4D',
          500: '#FF4B4B', // Coral Red
          600: '#E64444',
          700: '#CC3D3D',
          800: '#B33636',
          900: '#992F2F',
        },
        // Secondary Background
        secondary: {
          50: '#F7F9FC',
          100: '#E8EDF5',
          200: '#D1DAE8',
          300: '#B8C6D9',
          400: '#9FB2CA',
          500: '#869EBB',
          600: '#6D8AAC',
          700: '#54769D',
          800: '#3B628E',
          900: '#224E7F',
        },
        // Neutral Text
        neutral: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#5F6B7A',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        // Light Divider
        divider: '#E5E9F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 102, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0A1B3C 0%, #0066FF 100%)',
        'gradient-electric': 'linear-gradient(135deg, #0066FF 0%, #4B2CE1 100%)',
        'gradient-purple': 'linear-gradient(135deg, #4B2CE1 0%, #0066FF 100%)',
      },
    },
  },
  plugins: [],
}
