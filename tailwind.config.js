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
        // Original AdmirerX Brand Colors
        navy: '#0A1B3C',
        electric: '#0066FF',
        purple: '#4B2CE1',
        soft: '#F6F8FC',
        // Extended navy palette
        'navy-50': '#F0F4F8',
        'navy-100': '#D9E2EC',
        'navy-200': '#BCCCDC',
        'navy-300': '#9FB3C8',
        'navy-400': '#829AB1',
        'navy-500': '#627D98',
        'navy-600': '#486581',
        'navy-700': '#334E68',
        'navy-800': '#243B53',
        'navy-900': '#0A1B3C',
        // Extended electric palette
        'electric-50': '#E6F2FF',
        'electric-100': '#CCE5FF',
        'electric-200': '#99CCFF',
        'electric-300': '#66B2FF',
        'electric-400': '#3399FF',
        'electric-500': '#0066FF',
        'electric-600': '#0052CC',
        'electric-700': '#004299',
        'electric-800': '#003366',
        'electric-900': '#002433',
        // Extended purple palette
        'purple-50': '#F3F0FF',
        'purple-100': '#E6E0FF',
        'purple-200': '#CCC1FF',
        'purple-300': '#B3A2FF',
        'purple-400': '#9983FF',
        'purple-500': '#4B2CE1',
        'purple-600': '#3D24B8',
        'purple-700': '#2F1C8F',
        'purple-800': '#211466',
        'purple-900': '#130C3D',
        // Extended soft palette
        'soft-50': '#F6F8FC',
        'soft-100': '#EFF2F7',
        'soft-200': '#DDE4ED',
        'soft-300': '#CBD6E3',
        'soft-400': '#B9C8D9',
        'soft-500': '#A7BACF',
        'soft-600': '#95ACC5',
        'soft-700': '#839EBB',
        'soft-800': '#7190B1',
        'soft-900': '#5F82A7',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
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
