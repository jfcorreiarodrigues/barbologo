/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Override ALL border-radius to 0 — "Bordas Vivas" doctrine
    borderRadius: {
      none: '0',
      DEFAULT: '0',
      sm: '0',
      md: '0',
      lg: '0',
      xl: '0',
      '2xl': '0',
      '3xl': '0',
      full: '0',
    },
    extend: {
      colors: {
        barbo: {
          bg:            '#111111',
          surface:       '#181818',
          text:          '#F9F9F7',
          muted:         '#6B6B66',
          green:         '#2A4A2A',
          'green-hover': '#3A6040',
          copper:        '#8B6340',
          'copper-light':'#A07550',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans:  ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono:  ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      typography: {},
    },
  },
  plugins: [],
}
