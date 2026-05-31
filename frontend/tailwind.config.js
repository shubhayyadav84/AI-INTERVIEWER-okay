/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'gray-650': '#666666',
        'gray-150': '#f3f3f3',
      },
      spacing: {
        'safe-top': 'max(0.5rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(0.5rem, env(safe-area-inset-bottom))',
        'safe-left': 'max(0.5rem, env(safe-area-inset-left))',
        'safe-right': 'max(0.5rem, env(safe-area-inset-right))',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.5rem' }],
        '7xl': ['4.5rem', { lineHeight: '5.625rem' }],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
