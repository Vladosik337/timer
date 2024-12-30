/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#264ECA',
      'white': '#FFFFFF'
    },
    extend: {
      boxShadow: {
        'button': '0 0 2px 2px #FFF',
        'input': '0 0 1px 1px #FFF',
      }
    },
  },
  plugins: [],
}

